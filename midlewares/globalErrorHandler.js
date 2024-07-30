module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  // development mode
  if (process.env.NODE_ENV.trim() == "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  // production mode
  if (process.env.NODE_ENV.trim() == "PRODUCTION") {
    if (err.name === "SequelizeValidationError") {
      const messages = err.errors.map((e) => e.message);
      res.status(400).json({
        success: false,
        errors: messages,
      });
    } else {
      res.status(500).json({
        success: false,
        error: "Internal Server Error",
      });
    }
  }
};
