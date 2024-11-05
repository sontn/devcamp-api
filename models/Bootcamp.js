const mongoose = require('mongoose');
const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is require'],
    unique: true,
    maxlength: [50, 'Name is not more than 50 characters'],
  },
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
