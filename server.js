const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB(0);

const app = express();

const PORT = process.env.PORT;

app.use('/api/v1/bootcamps', bootcamps);

app.listen(
  PORT,
  console.log(`Server running at mode ${process.env.NODE_ENV} on port ${PORT}`)
);
