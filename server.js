const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

const bootcamps = require('./routes/bootcamps');

connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, console.log(`Server running at port ${PORT}`));
