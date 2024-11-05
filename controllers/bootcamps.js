const Bootcamp = require('../models/Bootcamp');

exports.getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    res.status(400).send({ success: false, error: err.message });
  }
};
