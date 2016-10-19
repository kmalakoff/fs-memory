'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = errnoException;

var _lodash = require('lodash.find');

var _lodash2 = _interopRequireDefault(_lodash);

var _errno = require('errno');

var _errno2 = _interopRequireDefault(_errno);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function errnoException(errno, info) {
  var err = (0, _lodash2.default)(_errno2.default, function (err) {
    return err.errno === errno;
  });
  return new _error2.default(err, info);
}