import path from 'path';
import {Node} from 'forestry';
import Stat from '../stat';
import * as utils from '../utils';
import * as extensions from './extensions';

export default class MemoryFileSystem {
  constructor(rootNode) {
    this.rootNode = rootNode;
  }

  statSync(fullPath) {
    let node = utils.findNode(this.rootNode, fullPath);
    if (!node) throw new Error(`Path does not exist ${fullPath}`);
    return new Stat(node);
  };

  readFileSync(fullPath, encoding) {
    let node = utils.findNode(this.rootNode, fullPath);
    if (!node) throw new Error(`Path does not exist ${fullPath}`);
    if (node.data.isDirectory) throw new Error(`Cannot readFile on a directory ${fullPath}`);
    return encoding ? node.data.contents.toString(encoding) : node.data.contents;
  }

  readdirSync(fullPath) {
    let node = utils.findNode(this.rootNode, fullPath);
    if (!node) throw new Error(`Path does not exist ${fullPath}`);
    if (!node.data.isDirectory) throw new Error(`Cannot readdirSync on a file ${fullPath}`);
    return node.data.children.map(childNode => childNode.data.name);
  }
}

// async functions
const ASYNC_METHODS = ['stat', 'readdir', 'readFile'];
ASYNC_METHODS.forEach(name => {
  MemoryFileSystem.prototype[name] = function(...args) {
    let result, callback = args.pop();
    try { result = this[`${name}Sync`](...args); } catch(err) { return callback(err); }
    return callback(null, result);
  };
});

Object.keys(extensions).map(key => MemoryFileSystem.prototype[key] = extensions[key])
