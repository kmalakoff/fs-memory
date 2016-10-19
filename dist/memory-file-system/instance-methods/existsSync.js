'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = existsSync;

var _utils = require('../lib/utils');

function existsSync(path) {
  return !!(0, _utils.findNode)(this.rootNode, path);
}