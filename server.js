const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');
// const logger = require('./middleware/logger');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server running at mode ${process.env.NODE_ENV} on port ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
  console.log('Come here---------------');
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
