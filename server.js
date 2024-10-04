const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT;
connectDB();

const app = express();

app.use('/api/v1/bootcamps', bootcamps);

app.listen(
  PORT,
  console.log(`Server running at mode ${process.env.NODE_ENV} on port ${PORT}`)
);
