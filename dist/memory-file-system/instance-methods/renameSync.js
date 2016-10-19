'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renameSync;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _utils = require('../lib/utils');

var _eventHandlers = require('../lib/event-handlers');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _error = require('../lib/error');

var _error2 = _interopRequireDefault(_error);

var _errno = require('errno');

var _errno2 = _interopRequireDefault(_errno);

var _mode = require('../lib/mode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renameSync(oldPath, newPath) {
  if (oldPath === newPath) return;

  var node = (0, _utils.findNode)(this.rootNode, oldPath);
  if (!node) throw new _error2.default(_errno2.default.code.ENOENT, oldPath);
  (0, _utils.removeChild)(node.parent, node.data.name);

  var parts = newPath.split(_path2.default.sep),
      name = parts.pop(),
      parentPath = parts.join(_path2.default.sep);
  var parentNode = (0, _utils.findNode)(this.rootNode, parentPath);
  if (!parentNode) throw new _error2.default(_errno2.default.code.ENOENT, parentPath);
  var existingNode = (0, _utils.removeChild)(parentNode, name);
  if (existingNode) {
    if ((0, _mode.nodeIsDirectory)(existingNode) !== (0, _mode.nodeIsDirectory)(node)) throw new _error2.default(_errno2.default.code.EISDIR, options.name);
  }
  node.data.name = name;
  parentNode.addChild(node);

  if ((0, _mode.nodeIsDirectory)(node)) !existingNode || _eventHandlers2.default.emit('addDir', newPath);else _eventHandlers2.default.emit(existingNode ? 'update' : 'add', newPath);
}