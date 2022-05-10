
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const JobSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },

    title: {
      type: String,
      required: true
    },
    budget:{
      type:String,
      required:true
    },
    
  
    category:{
      type:String,
      required:true
    },
    text: {
      type: String,
      required:true
    },

    link:{
      type:String,
      
    },
    date:{
      type:String,
      required:true
    },
    skill:{
      type:String
    },
 
    emails:{
      type:String,
      required:true
    },


    date: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = Job = mongoose.model("job",JobSchema);
  