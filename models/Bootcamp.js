const mongoose = require('mongoose');

const BootcampScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
  },
});

module.exports = mongoose.model('Bootcamp', BootcampScheme);
