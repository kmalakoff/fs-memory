'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readFileSync;

var _bodec = require('bodec');

var _bodec2 = _interopRequireDefault(_bodec);

var _errno = require('errno');

var _errno2 = _interopRequireDefault(_errno);

var _error = require('../lib/error');

var _error2 = _interopRequireDefault(_error);

var _utils = require('../lib/utils');

var _mode = require('../lib/mode');

var _lodash = require('lodash.isstring');

var _lodash2 = _interopRequireDefault(_lodash);

var _encodings = require('../lib/encodings');

var _encodings2 = _interopRequireDefault(_encodings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readFileSync(path, options) {
  var node = (0, _utils.findNode)(this.rootNode, path);
  if (!node) throw new _error2.default(_errno2.default.code.ENOENT, path);
  if ((0, _mode.nodeIsDirectory)(node)) throw new _error2.default(_errno2.default.code.EISDIR, path);

  var encoding = !options || options.encoding || options;
  var stringEncoding = (0, _lodash2.default)(encoding) && ~_encodings2.default.string.indexOf(encoding) ? encoding : undefined;
  return stringEncoding ? _bodec2.default.toString(node.data.contents, stringEncoding) : node.data.contents;
}