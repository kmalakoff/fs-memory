"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lstatSyncNoException;
function lstatSyncNoException(path) {
  try {
    return this.lstatSync(path);
  } catch (err) {}
}