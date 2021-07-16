const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
      await mongoose.connect(
        MONGODB_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false
        }
      );
  
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;