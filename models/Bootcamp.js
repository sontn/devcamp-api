const mongoose = require('mongoose');
const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
