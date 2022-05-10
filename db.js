const mongoose = require("mongoose");
const config = require("./confing")
const connectDB = async () => {
  try {
    await mongoose.connect(config.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected....");
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;