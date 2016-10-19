"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FSError = function (_Error) {
  _inherits(FSError, _Error);

  function FSError(err, info) {
    _classCallCheck(this, FSError);

    // if (Error.captureStackTrace) Error.captureStackTrace(this, arguments.callee); // TODO: capture stack trace
    var _this = _possibleConstructorReturn(this, (FSError.__proto__ || Object.getPrototypeOf(FSError)).call(this));

    _this.code = err.code;
    _this.errno = err.errno;
    _this.message = err.description;
    _this.info = info;
    return _this;
  }

  return FSError;
}(Error);

exports.default = FSError;