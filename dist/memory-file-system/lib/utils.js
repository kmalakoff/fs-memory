'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitRootRe = exports.nextPartRe = exports.isWindows = undefined;
exports.isName = isName;
exports.findNextNode = findNextNode;
exports.findNode = findNode;
exports.findChild = findChild;
exports.removeChild = removeChild;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash.find');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.findindex');

var _lodash4 = _interopRequireDefault(_lodash3);

var _errno = require('errno');

var _errno2 = _interopRequireDefault(_errno);

var _error = require('../lib/error');

var _error2 = _interopRequireDefault(_error);

var _forestry = require('forestry');

var _mode = require('../lib/mode');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isName(name) {
  return name !== '.' && name !== '..';
}

function findNextNode(node, name) {
  switch (name) {
    case '.':
      return node;
    case '..':
      return node.parent;
    default:
      return findChild(node, name);
  }
}

function findNode(current, path) {
  var pathParts = path.split(_path2.default.sep);

  // root
  if (pathParts[0] == '') {
    pathParts.shift();
    var rootName = pathParts.shift();
    if (current.data.name !== rootName) return null;
  }

  // children
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pathParts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;

      current = findNextNode(current, name);
      if (!current) return null;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return current;
}

function findChild(node, name) {
  if (!(0, _mode.nodeIsDirectory)(node)) throw new _error2.default(_errno2.default.code.ENOTDIR, node.data.name);
  return (0, _lodash2.default)(node.children, function (childNode) {
    return childNode.data.name === name;
  });
};
function removeChild(node, name) {
  var index = (0, _lodash4.default)(node.children, function (childNode) {
    return childNode.data.name === name;
  });
  if (index < 0) return null;
  var childNode = node.children[index];
  node.children.splice(index, 1);
  return childNode;
};

var isWindows = exports.isWindows = process.platform === 'win32';

// Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
var nextPartRe = exports.nextPartRe = isWindows ? /(.*?)(?:[\/\\]+|$)/g : /(.*?)(?:[\/]+|$)/g;

// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
var splitRootRe = exports.splitRootRe = isWindows ? /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/ : /^[\/]*/;