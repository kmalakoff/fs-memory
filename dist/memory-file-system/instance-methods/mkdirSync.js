'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mkdirSync;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _utils = require('../lib/utils');

var _forestry = require('forestry');

var _eventHandlers = require('../lib/event-handlers');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _error = require('../lib/error');

var _error2 = _interopRequireDefault(_error);

var _errno = require('errno');

var _errno2 = _interopRequireDefault(_errno);

var _mode = require('../lib/mode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mkdirSync(path) {
  var parts = path.split(_path2.default.sep),
      name = parts.pop(),
      parentPath = parts.join(_path2.default.sep);
  var parentNode = (0, _utils.findNode)(this.rootNode, parentPath);
  if (!parentNode) throw new _error2.default(_errno2.default.code.ENOENT, parentPath);
  var node = (0, _utils.findChild)(parentNode, name);
  if (node) {
    if (!(0, _mode.nodeIsDirectory)(node)) throw new _error2.default(_errno2.default.code.ENOTDIR, path);
  } else {
    var now = new Date();
    node = new _forestry.Node({ name: name, stat: { mode: 16384, size: 0, ctime: now, mtime: now, birthtime: now } });
    parentNode.addChild(node);
    _eventHandlers2.default.emit('addDir', path);
  }
}