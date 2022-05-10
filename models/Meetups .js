const mongoose =require('mongoose')
const Schema = mongoose.Schema;
const MeetSchema = new Schema({


 topic:{
     type:String,
     required:true
 },
 technology:{
     type:String,
     required:true
 },
 selfintro:{
     type:String,
     required:true
 },
 summary:{
     type:String,
     required:true
 },
 user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
   room:{
      type:String,
      required:true
  },
  duration:{
      type :String
  },
  day:{
     type :Date,
     required:true 
},
  date: {
    type: Date,
    default: Date.now
  }



})
const  Meetups =mongoose.model("meetups",MeetSchema)
module.exports=Meetups