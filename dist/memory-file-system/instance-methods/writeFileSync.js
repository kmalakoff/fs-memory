'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = writeFileSync;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash.isstring');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.defaults');

var _lodash4 = _interopRequireDefault(_lodash3);

var _bodec = require('bodec');

var _bodec2 = _interopRequireDefault(_bodec);

var _errno = require('errno');

var _errno2 = _interopRequireDefault(_errno);

var _eventHandlers = require('../lib/event-handlers');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _error = require('../lib/error');

var _error2 = _interopRequireDefault(_error);

var _utils = require('../lib/utils');

var _forestry = require('forestry');

var _mode = require('../lib/mode');

var _encodings = require('../lib/encodings');

var _encodings2 = _interopRequireDefault(_encodings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function writeFileSync(path, data, options) {
  var parts = path.split(_path2.default.sep),
      name = parts.pop(),
      parentPath = parts.join(_path2.default.sep);
  var parentNode = (0, _utils.findNode)(this.rootNode, parentPath);
  if (!parentNode) throw new _error2.default(_errno2.default.code.ENOENT, parentPath);

  var now = new Date();
  var node = (0, _utils.findChild)(parentNode, name);
  var exists = !!node;
  if (node) {
    if ((0, _mode.nodeIsDirectory)(node)) throw new _error2.default(_errno2.default.code.EISDIR, path);
  } else {
    node = new _forestry.Node({ name: name, stat: { mode: 32768, size: 0, ctime: now, mtime: now, birthtime: now } });
    parentNode.addChild(node);
  }

  var encoding = !options || options.encoding || options;
  var stringEncoding = (0, _lodash2.default)(encoding) && ~_encodings2.default.string.indexOf(encoding) ? encoding : undefined;
  node.data.contents = stringEncoding ? _bodec2.default.fromString(data, stringEncoding) : _bodec2.default.copy(data);
  node.data.stat = (0, _lodash4.default)({ size: node.data.contents.length, mtime: now }, node.data.stat || {});
  _eventHandlers2.default.emit(exists ? 'update' : 'add', path);
}