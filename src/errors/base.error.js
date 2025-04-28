class BaseError extends Error {
  constructor(name, statusCode, message, details) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.details = this.details;
    //Error.captureStackTrace(this); // to know call stack where error could
  }
}
module.exports = BaseError;
