const moogoose = require('mongoose');
const BootcampSchema = new moogoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: true,
    maxlength: [50, 'name is not more than 50 characters'],
  },
});

module.exports = moogoose.model('Bootcamp', BootcampSchema);
