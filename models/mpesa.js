const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MpesaSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
 
  phone:{
type:Number,
required:true
  },
  amount:{
      type:String,
      required:true
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mpesa = mongoose.model("mpesa", MpesaSchema);