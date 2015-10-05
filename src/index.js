import path from 'path';
import {Node} from 'forestry';
import Stat from './stat';
import MemoryFileSystemError from './error';
import {isName, findNextNode, findNode} from './utils';
import * as extensions from './non-native-extensions';

import ERRORS from 'errno';

export default class MemoryFileSystem {
  constructor(rootNode) {
    this.rootNode = rootNode;
  }

  existsSync(fullPath) { return !!findNode(this.rootNode, fullPath); }

  statSync(fullPath) {
    let node = findNode(this.rootNode, fullPath);
    if (!node) throw new Error(`Path does not exist ${fullPath}`);
    return new Stat(node);
  };
  lstatSync(fullPath) { return this.statSync(fullPath); }
  lstatSyncNoException(fullPath) { try { return this.lstatSync(fullPath) } catch (err) {} }

  mkdirSync = function(fullPath) {
    var pathParts = pathToArray(fullPath);
    if (!pathParts.length) return;
    let current, next = this.rootNode;
    let name;

    for (let i = 0; i < pathParts.length - 1; i++) {
      name = pathParts[i];
      next = findNextNode(current, name);
      if (!next) {
        if (!isName(name)) throw new MemoryFileSystemError(ERRORS.code.ENOENT, fullPath);
        else next = new Node({name, isDirectory: true})
        current = next;
      }
      else if (next.data.isDirectory) throw new MemoryFileSystemError(ERRORS.code.EEXIST, fullPath);
      else throw new MemoryFileSystemError(ERRORS.code.ENOTDIR, fullPath);
    }
  };

  readFileSync(fullPath, encoding) {
    let node = findNode(this.rootNode, fullPath);
    if (!node) throw new Error(`Path does not exist ${fullPath}`);
    if (node.data.isDirectory) throw new Error(`Cannot readFile on a directory ${fullPath}`);
    return encoding ? node.data.contents.toString(encoding) : node.data.contents;
  }

  readdirSync(fullPath) {
    let node = findNode(this.rootNode, fullPath);
    if (!node) throw new Error(`Path does not exist ${fullPath}`);
    if (!node.data.isDirectory) throw new Error(`Cannot readdirSync on a file ${fullPath}`);
    return node.children.map(childNode => childNode.data.name);
  }
}

// async functions
const ASYNC_METHODS = ['stat', 'lstat', 'readdir', 'mkdir', 'readFile'];
ASYNC_METHODS.forEach(name => {
  MemoryFileSystem.prototype[name] = function(...args) {
    let result, callback = args.pop();
    try { result = this[`${name}Sync`](...args); } catch(err) { return callback(err); }
    return callback(null, result);
  };
});

Object.keys(extensions).map(key => MemoryFileSystem.prototype[key] = extensions[key])
