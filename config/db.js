const moogoose = require('mongoose');
const connectDB = async () => {
  const conn = await moogoose.connect(process.env.MONGO_URI, {});
  console.log(`Connected MongoDB: ${conn.connection.host}`.cyan);
};

module.exports = connectDB;
