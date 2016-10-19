'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unlinkSync;

var _errno = require('errno');

var _errno2 = _interopRequireDefault(_errno);

var _error = require('../lib/error');

var _error2 = _interopRequireDefault(_error);

var _eventHandlers = require('../lib/event-handlers');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _utils = require('../lib/utils');

var _mode = require('../lib/mode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unlinkSync(path) {
  var node = (0, _utils.findNode)(this.rootNode, path);
  if (!node) throw new _error2.default(_errno2.default.code.ENOENT, path);
  if (!node.parent) throw new _error2.default(_errno2.default.code.ENOENT);
  (0, _utils.removeChild)(node.parent, node.data.name);
  _eventHandlers2.default.emit((0, _mode.nodeIsDirectory)(node) ? 'unlinkDir' : 'unlink', path);
}