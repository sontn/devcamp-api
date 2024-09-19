const mongoose = require('mongoose');
const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    maxlength: [50, 'A name is not more than 50 characters'],
  },
});
module.exports = mongoose.model('Bootcamp', BootcampSchema);
