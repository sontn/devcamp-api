const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {});
  console.log(`Connected Database: ${conn.connection.host}`);
};

module.exports = connectDB;
