const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const bootcamps = require('./routes/bootcamps');

const app = express();
app.use('/api/v1/bootcamps', bootcamps);
const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running at mode ${process.env.NODE_ENV} at port ${PORT}`)
);
