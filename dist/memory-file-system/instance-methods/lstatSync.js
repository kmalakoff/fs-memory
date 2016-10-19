"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lstatSync;
function lstatSync(path) {
  return this.statSync(path);
}