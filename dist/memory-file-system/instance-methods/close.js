'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = close;

var _errno = require('errno');

var _errno2 = _interopRequireDefault(_errno);

var _error = require('../lib/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function close(fd) {
  if (!fd || !fd.isOpen) throw new _error2.default(_errno2.default.code.ENOENT, path);
  fd.isOpen = false;
}