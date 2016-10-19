'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = __loadTree;

var _forestry = require('forestry');

var _bodec = require('bodec');

var _bodec2 = _interopRequireDefault(_bodec);

var _mode = require('../lib/mode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATE_PROPERTIES = ['atime', 'mtime', 'ctime', 'birthtime'];

function deserializeData(data) {
  var data = Object.assign({}, data);
  if (data.stat) {
    data.stat = Object.assign({}, data.stat);
    DATE_PROPERTIES.forEach(function (time) {
      if (data.stat.hasOwnProperty(time)) data.stat[time] = new Date(data.stat[time]);
    });
  }
  if (data.contents) data.contents = _bodec2.default.fromRaw(data.contents);
  return data;
}

function createNode(dataNode) {
  var data = deserializeData(dataNode.data);
  if (!(0, _mode.nodeIsDirectory)(dataNode)) return new _forestry.Node(data);

  var node = new _forestry.Node(data);
  dataNode.children.forEach(function (childDataNode) {
    return node.addChild(createNode(childDataNode));
  });
  return node;
}

function __loadTree(dataNode) {
  var fs = this;
  fs.rootNode = createNode(dataNode);
}