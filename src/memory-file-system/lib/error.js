export default class FSError extends Error {
  constructor(err, info) {
    super()
    // if (Error.captureStackTrace) Error.captureStackTrace(this, arguments.callee); // TODO: capture stack trace
    this.code = err.code;
    this.errno = err.errno;
    this.message = err.description;
    this.info = info;
  }
}
