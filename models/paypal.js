const mongoose = require("mongoose");

const PaypalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name:{
    type:String,

  },
 amount:{
   type:String
 },
  country_code: {
    type: String,
   
  },
  
  phone: {
        type: String,
        
      },
      name: {
        type: String,
        
      },
      line1: {
        type: String,
        
      },
      city:{
          type:String,
         
      },
     state:{
         type:String,
       
     },
     postal_code:{
         type:String,
         
     },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Pay = mongoose.model("pay", PaypalSchema);
