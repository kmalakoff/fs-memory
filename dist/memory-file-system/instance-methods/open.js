'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = open;

var _errno = require('errno');

var _errno2 = _interopRequireDefault(_errno);

var _error = require('../lib/error');

var _error2 = _interopRequireDefault(_error);

var _utils = require('../lib/utils');

var _mode = require('../lib/mode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function open(path, flags, mode) {
  var node = (0, _utils.findNode)(this.rootNode, path);
  if (node && (0, _mode.nodeIsDirectory)(node)) throw new _error2.default(_errno2.default.code.EISDIR, path);

  return { path: path, isOpen: true };
}