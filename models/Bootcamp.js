const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
