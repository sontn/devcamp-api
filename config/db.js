const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {});
  console.log(`Connected DB: ${conn.connection.host}`.cyan);
};
module.exports = connectDB;
