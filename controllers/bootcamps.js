// @desc:       Get all bootcamps
// @route:      GET /api/v1/bootcamps
// @access:     Public
exports.getBootcamps = (req, res, next) => {
  res.send(`Get all bootcamps`);
};

// @desc:       Get a bootcamp
// @route:      GET /api/v1/bootcamps/:id
// @access:     Public
exports.getBootcamp = (req, res, next) => {
  res.send(`Get a bootcamp with id ${req.params.id}`);
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
  res.send(`Update a bootcamp ${req.params.id}`);
};

// @desc:       Delete a bootcamp
// @route:      DELETE /api/v1/bootcamps/:id
// @access:     Private
exports.deleteBootcamp = (req, res, next) => {
  res.send(`Delete a bootcamp ${req.params.id}`);
};
