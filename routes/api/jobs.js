const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const nodemailer =require('nodemailer')
const config =require('../../confing');
const Job = require("../../models/Job");
 
router.post(
  "/",
  [
    auth,
    [
      check("text", "Text is required")
        .not()
        .isEmpty(),
  
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newPost = new Job({
      
        text: req.body.text,
        title:req.body.title,
        budget:req.body.budget,
        category:req.body.category,
        link:req.body.link,
        date:req.body.date,
        skill:req.body.skill,
        emails:req.body.emails,
        user: req.user.id,
      });
  
    

      const post =  await newPost.save();
     res.json(post)
     
    
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
    subject: ` Job Alerts`,
    html: `
    Hello ,
    <br> <br>
  
    ${newPost.title}  
  
    <br> <br>
    Job description:<br>
    ${newPost.text}
    <br> <br>
    Responsibility: <br>
    ${newPost.responsibility } <br>
    <br>
    Required Skill set: <br>
    ${newPost.skill} <br><br>
      Based on your profile  on devConnector  wed like to consider you for this postion.
      <Strong>Monthly budget ~${newPost.budget} </Strong>  <br>
    

    <br>
    Send Quote and CV to ${newPost.emails}
    <br>
  
    Send before ${newPost.date}
    <br>
  
    Click the link to see more details on this job: <br>
    https://devconector.herokuapp.com/find/${newPost._id} <br> 
   Looking forward to your quote  
    <br>
    With appreciation, <br> 
    
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
      console.error(error.message);
     res.status(500).send("Server Error");
    }

  }
);
  router.get("/",  async (req, res) => {
    try {
      const job = await Job.find().sort({ _id: -1 });
      res.json(job);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
  
      if (!job) {
        return res.status(404).json({ msg: "job not found" });
      }
  
      res.json(job);
    } catch (error) {
      console.error(error.message);
     
      res.status(500).send("Server Error");
    }
  });
module.exports = router;
