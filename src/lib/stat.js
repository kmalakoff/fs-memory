export default class Stat {
  constructor(node) {
    Object.assign(this, node.data.stat || {});
    if (node.data.isDirectory) this.__d = true;
  }

  isFile() { return !this.__d }
  isDirectory() { return this.__d }
  isBlockDevice() { return false; }
  isCharacterDevice() { return false; }
  isSymbolicLink() { return false; }
  isFIFO() { return false; }
  isSocket() { return false; }
}
