const express = require('express');
const bootcamp = require('./routes/bootcamps');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`Server running at mode ${process.env.NODE_ENV} on port ${PORT}`)
);
