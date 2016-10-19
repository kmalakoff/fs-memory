'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instanceMethods = require('./instance-methods');

var instanceMethods = _interopRequireWildcard(_instanceMethods);

var _nonNativeExtensions = require('./non-native-extensions');

var nonNativeExtensions = _interopRequireWildcard(_nonNativeExtensions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MemoryFileSystem = function MemoryFileSystem(rootNode) {
  _classCallCheck(this, MemoryFileSystem);

  this.rootNode = rootNode;
};

// mixin methods


exports.default = MemoryFileSystem;
Object.keys(instanceMethods).map(function (key) {
  return MemoryFileSystem.prototype[key] = instanceMethods[key];
});
Object.keys(nonNativeExtensions).map(function (key) {
  return MemoryFileSystem.prototype[key] = nonNativeExtensions[key];
});