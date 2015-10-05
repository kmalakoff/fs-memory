export default class Stat {
  constructor(node) {
    this.node = node;
    if (this.node.data.stat) Object.assign(this, this.node.data.stat);
  }

  isFile() { return !this.node.isDirectory; }
  isDirectory() { return this.node.isDirectory; }
  isBlockDevice() { return false; }
  isCharacterDevice() { return false; }
  isSymbolicLink() { return false; }
  isFIFO() { return false; }
  isSocket() { return false; }
}
