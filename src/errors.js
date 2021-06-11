class InvalidReqError extends Error {
    constructor(message) {
      super(message);
      this.name = "InvalidMethodError";
      this.code = 400;
    }
}

class InvalidMethodError extends InvalidReqError { }
class InvalidPathError extends InvalidReqError { }

module.exports = {
    InvalidReqError,
    InvalidMethodError,
    InvalidPathError
}