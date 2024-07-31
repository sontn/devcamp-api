const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');

dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT;

const app = express();

app.use('/api/v1/bootcamps', bootcamps);
app.listen(
  PORT,
  console.log(`Server running at mode ${process.env.NODE_ENV} at port ${PORT}`)
);
