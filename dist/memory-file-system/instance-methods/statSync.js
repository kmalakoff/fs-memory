'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = statSync;

var _errno = require('errno');

var _errno2 = _interopRequireDefault(_errno);

var _error = require('../lib/error');

var _error2 = _interopRequireDefault(_error);

var _stat = require('../lib/stat');

var _stat2 = _interopRequireDefault(_stat);

var _utils = require('../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function statSync(path) {
  var node = (0, _utils.findNode)(this.rootNode, path);
  if (!node) throw new _error2.default(_errno2.default.code.ENOENT, path);
  return new _stat2.default(node);
}