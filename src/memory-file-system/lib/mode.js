export default class ModeUtils {
  static isFile(mode) { return !!(mode & 0o100000); }
  static isDirectory(mode) { return !!(mode & 0o040000); }

  static nodeIsFile(node) { return !!(node.data.stat.mode & 0o100000); }
  static nodeIsDirectory(node) { return !!(node.data.stat.mode & 0o040000); }
}
