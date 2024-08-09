const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(
  PORT,
  console.log(
    `Server running at mode ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err}`);
  server.close(() => process.exit(1));
});
