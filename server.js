const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const bootcamps = require('./routes/bootcamps');

const app = express();
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT;

connectDB();

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/bootcamps', bootcamps);

app.listen(
  PORT,
  console.log(
    `Server running at mode ${process.env.NODE_ENV} on port ${PORT}`.bgYellow
  )
);
