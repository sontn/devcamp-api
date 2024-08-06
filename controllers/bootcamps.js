const Bootcamp = require('../models/Bootcamp');

// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
  res.send(`Get all bootcamps`);
};

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
  res.send(`Get single bootcamp with id ${req.params.id}`);
};

// @desc        Create a bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = async (req, res, next) => {
  try {
    // const bootcamp = await Bootcamp.create(req.body);
    res.send({ success: true, hello: req.hello });
  } catch (err) {
    console.log('Go catch');
    res.status(400).json({ success: false });
    next(err);
  }
};

// @desc        Update a bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
  res.send(`Update a bootcamp with id ${req.params.id}`);
};

// @desc        Delete a bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
  res.send(`Delete a bootcamp with id ${req.params.id}`);
};
