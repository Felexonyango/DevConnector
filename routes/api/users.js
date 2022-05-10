const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../confing");
const { check, validationResult } = require("express-validator");
const nodemailer =require('nodemailer')
const cypto=require('crypto')
const User = require("../../models/User");

router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
      
    check("email", "Please include a valid email").isEmail()
    .trim(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password,terms } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      user = new User({
        name,
        email,
        avatar,
        password,
        terms
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.JWT_SECRETE,
        { expiresIn: "7d",},
        (error, token) => {
          if (error) throw error;
         res.json({token})
        }
      );
      const transport = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: 'devconnector254@gmail.com',
            
                pass: `${config.PASSWORD}`
        }
    })
  
    const mailOptions = {
      from: '"DevConnector Team"<devconnector254@gmail.com>',
        to: user.email,
        subject: ` SUCCESSFUL REGESTRATION`,
        html: `
        Dear ${user.name},
        <br><br>
        Thanks for signing up with DevConnector Team. 

        <br>
        Kind regards,<br>
        DevConnector Team
        `,
    }
  
  await  transport.sendMail(mailOptions,(error, info)=>{


   if(error){
     console.log(error)
   }
   
   console.log(info.response)
   

    })
    
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);



router.post("/forgetpassword",async(req,res)=>{
  try{
    const user = await User.findOne({ email: req.body.email});
   
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User with this email does not exists" }] });
    }
    const secret= config.JWT_SECRETE +user.password
    
    const payload = {
      user: {
        id: user.id,
        email:user.email
      }
      
    };
    const token =jwt.sign(payload,secret,{expiresIn:'60m'})
   user.resetToken=token
   //on local to use port 3000/resetpassword
    const link=`https://devconector.herokuapp.com/resetpassword/${token}`
  const transport = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
          user: 'devconnector254@gmail.com',
              pass: `${config.PASSWORD}`
      }
  })

  const mailOptions = {
    from: '"DevConnector Team"<devconnector254@gmail.com>',
      to: user.email,
      subject: `RESETTING PASSWORD`,
      html: `
      Dear ${user.name},
      <br>
      Click the link below to reset your password for DevConnector. The link expires after 15 minutes and it's for a one time use. <br>
      <a href="${link}">${link}</a>
      <br>
      If you did not initiate a forgot password request kindly report this incident by simply replying to this email or calling us on <a href="tel:+254748793253"> 0748793263</a>
      <br><br>
      Kind regards,<br>
      DevConnector Team
      `,
  }

    await transport.sendMail(mailOptions)
  
    await user.save()
  
      return  res.status(200).json({msg:"A verification email has been sent to " + user.email + "."})
     
    }
  


catch (e) {
  console.log(e)
}
})


router.post('/resetpassword',async(req,res)=>{
  try{
    const newpassword =req.body.password
 
  const sentToken =req.body.token

 
 const user= await User.findOne({resetToken:sentToken})
 if(!user){
return res.status(401).json({msg:"Error try again session expired"})

 }
 
  bcrypt.hash(newpassword,10).then(hashedpassword=>{
user.password=hashedpassword
user.resetToken=undefined

user.save().then((saveuser)=>{
  res.status(200).json({msg:"You have successfully updated your password"})

})

  })
  

}
catch(error){
  return res.status(401).json({error:"Incorrect token  or its expired"})

}
  
});




module.exports = router;