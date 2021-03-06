import sysPath from 'path';
import find from 'lodash.find';
import findIndex from 'lodash.findindex';
import ERRORS from 'errno';
import FSError from '../lib/error';
import {Node} from 'forestry';
import {nodeIsDirectory} from '../lib/mode';

export function isName(name) { return (name !== '.') && (name !== '..'); }

export function findNextNode(node, name) {
  switch(name) {
    case '.': return node;
    case '..': return node.parent;
    default: return findChild(node, name);
  }
}

export function findNode(current, path) {
  let pathParts = path.split(sysPath.sep);

  // root
  if (pathParts[0] == '') {
    pathParts.shift();
    let rootName = pathParts.shift();
    if (current.data.name !== rootName) return null;
  }

  // children
  for (let name of pathParts) {
    current = findNextNode(current, name);
    if (!current) return null;
  }
  return current;
}

export function findChild(node, name) {
  if (!nodeIsDirectory(node)) throw new FSError(ERRORS.code.ENOTDIR, node.data.name);
  return find(node.children, childNode => childNode.data.name === name);
};
export function removeChild(node, name) {
  let index = findIndex(node.children, childNode => childNode.data.name === name);
  if (index<0) return null;
  let childNode = node.children[index];
  node.children.splice(index, 1);
  return childNode;
};

export const isWindows = process.platform === 'win32';

// Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
export var nextPartRe = isWindows ? /(.*?)(?:[\/\\]+|$)/g : /(.*?)(?:[\/]+|$)/g;

// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
export var splitRootRe = isWindows ? /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/ : /^[\/]*/;
