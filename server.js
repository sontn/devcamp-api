const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}
app.use('/api/v1/bootcamps', bootcamps);

PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running on mode ${process.env.NODE_ENV} at port ${PORT}`)
);
