const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`Server running at mode ${process.env.NODE_ENV} on port ${PORT}`)
);
