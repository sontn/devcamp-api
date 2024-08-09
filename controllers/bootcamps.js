// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps

const Bootcamp = require('../models/Bootcamp');

// @access      Public
exports.getBoocamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBoocamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res
        .status(404)
        .json({ success: false, data: `Bootcamp not found` });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc        Create a bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBoocamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc        Update a bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBoocamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true,
    });
    if (!bootcamp) {
      return res
        .status(404)
        .json({ success: false, data: `Bootcamp not found` });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc        Delete a bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBoocamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res
        .status(404)
        .json({ success: false, data: `Bootcamp not found` });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
