const Bootcamps = require('../models/Bootcamp');
exports.getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamps.find();
    res.status(200).send({ success: true, data: bootcamps });
  } catch (err) {
    res.status(404).send({ success: false, error: err.message });
  }
};
