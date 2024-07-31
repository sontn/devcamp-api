// @desc:       Get all bootcamps
// @route:      GET /api/v1/bootcamps
// @access:     Public
exports.getBootcamps = (req, res, next) => {
  res.send(`Get all bootcamps`);
};

// @desc:       Get single bootcamp
// @route:      GET /api/v1/bootcamps/:id
// @access:     Public
exports.getBootcamp = (req, res, next) => {
  res.send(`Get single bootcamp with id ${req.params.id}`);
};

// @desc:       Create a bootcamp
// @route:      POST /api/v1/bootcamps
// @access:     Private
exports.createBootcamp = (req, res, next) => {
  res.send(`Create a bootcamp`);
};

// @desc:       Update a bootcamp
// @route:      PUT /api/v1/bootcamps/:id
// @access:     Private
exports.updateBootcamp = (req, res, next) => {
  res.send(`Create a bootcamp with id ${req.params.id}`);
};

// @desc:       Delete bootcamp
// @route:      DELETE /api/v1/bootcamps/:id
// @access:     Private
exports.deleteBootcamp = (req, res, next) => {
  res.send(`Delete bootcamp with id ${req.params.id}`);
};
