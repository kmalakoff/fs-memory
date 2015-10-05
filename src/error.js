export default class MemoryFileSystemError extends Error {
  constructor(err, path) {
    super()
    if (Error.captureStackTrace) Error.captureStackTrace(this, arguments.callee)
    this.code = err.code;
    this.errno = err.errno;
    this.message = err.description;
    this.path = path;
  }
}
