const errorHandler = (err, req, res, next) => {
  //   let error = { ...err };
  //   error.message = err.message;

  console.log(err.stack.red);

  res.status(500).json({
    success: false,
    error: err.message,
  });
};

module.exports = errorHandler;
