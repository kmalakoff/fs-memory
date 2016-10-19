import {isFile, isDirectory} from './mode';

export default class Stat {
  constructor(node) {
    Object.assign(this, node.data.stat || {});
  }

  isFile() { return isFile(this.mode); }
  isDirectory() { return isDirectory(this.mode); }
  isBlockDevice() { return false; }
  isCharacterDevice() { return false; }
  isSymbolicLink() { return false; }
  isFIFO() { return false; }
  isSocket() { return false; }
}
