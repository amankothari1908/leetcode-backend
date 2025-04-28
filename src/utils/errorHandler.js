const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/base.error");

function errorHandler(error, req, res, next) {
  if (error instanceof BaseError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      error: error.details,
      data: {}, //because this is an exception so no data will be provided
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something Went Wrong",
    error: error,
    data: {},
  });
}

module.exports = errorHandler;
