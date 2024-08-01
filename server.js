const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');

dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT;

connectDB();
const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler);

const server = app.listen(
  PORT,
  console.log(`Server running at mode ${process.env.NODE_ENV} at port ${PORT}`)
);

process.on('unhandledRejection1', (err, promise) => {
  server.close(() => process.exit(1));
});
