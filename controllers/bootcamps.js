const Bootcamp = require('../models/Bootcamp');

exports.getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).send({ success: true, data: bootcamps });
  } catch (err) {}
};
