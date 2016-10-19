'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nullCheck;
function nullCheck(path, callback) {
  if (('' + path).indexOf('\0') !== -1) {
    var er = new Error('Path must be a string without null bytes');
    er.code = 'ENOENT';
    if (typeof callback !== 'function') throw er;
    process.nextTick(callback, er);
    return false;
  }
  return true;
}