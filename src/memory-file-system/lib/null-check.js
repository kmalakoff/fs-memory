export default function nullCheck(path, callback) {
  if (('' + path).indexOf('\u0000') !== -1) {
    var er = new Error('Path must be a string without null bytes');
    er.code = 'ENOENT';
    if (typeof callback !== 'function')
      throw er;
    process.nextTick(callback, er);
    return false;
  }
  return true;
}
