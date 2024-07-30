
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

      res.status(err.statusCode).json({
        success: false,
        message: err.message || "Internal server error",
      });
    }

};
