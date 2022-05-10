const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const nodemailer =require('nodemailer')
const config =require('../../confing');
const Meetups =require('../../models/Meetups ')
const User =require("../../models/User")
router.post("/",auth,async(req,res)=>{
    try{

    let user = await User.findById(req.user.id).select("-password");

     const  meet =new  Meetups({

      topic:req.body.topic,
      technology:req.body.technology,
      selfintro:req.body.selfintro,
      summary:req.body.summary,
      room:req.body.room,
      day:req.body.day,
      duration:req.body.duration,
      user:req.user.id
     })
  const newmeet = await meet.save()
   res.json(newmeet)

   await  User.find({}, function(err, allUsers){
    if(err){
        console.log(err);
    }
    var mailList = [];
   
    allUsers.forEach(function(users){

  
        mailList.push(users.email);
        return mailList;
    });
   
    const transport = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
          user: 'devconnector254@gmail.com',
              pass: `${config.PASSWORD}`
      }
    })
const mailOptions = {
to: [],
bcc: mailList,
from: '"DevConnector Team"<devconnector254@gmail.com>',
subject: ` Webinar Meeting Alert`,
html: `
Hello ,
<br> 
${meet.topic} 
<br>
${meet.selfintro}

<br> 
${meet.technology}

<br> 
${meet.summary}
<br>

   
<br>
Room Number
${meet.room}
<br>
${meet.day} 

<br>
Time 
${meet.duration}
  <br> <br>

Welcome all , <br> 

Kind regards,<br>
DevConnector Team
`,
}

transport.sendMail(mailOptions,(error, info)=>{

if(error){
console.log(error)
}
console.log(info)

})
})


    }
    catch(error){
        console.log(error)
    }
})

router.get("/",  async (req, res) => {
    try {
      const meeting = await Meetups.find().sort({ date: -1 });
      res.json(meeting);
    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });

module.exports = router;