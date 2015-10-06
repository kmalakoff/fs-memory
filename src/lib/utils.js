import path from 'path';
import _ from 'lodash';

export function isName(name) { return (name !== '.') && (name !== '..'); }

export function findNextNode(node, name) {
  switch(name) {
    case '.': return node;
    case '..': return node.parent;
    default: return _.find(node.children, childNode => childNode.data.name == name);
  }
}

export function findNode(current, fullPath) {
  let pathParts = fullPath.split(path.sep);

  // root
  if (pathParts[0] == '') {
    pathParts.shift();
    let rootName = pathParts.shift();
    if (current.data.name !== rootName) return null;
  }

  // children
  for (let name of pathParts) {
    current = findNextNode(current, name)
    if (!current) return null;
  }
  return current;
}

export const isWindows = process.platform === 'win32';

// Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
export var nextPartRe = isWindows ? /(.*?)(?:[\/\\]+|$)/g : /(.*?)(?:[\/]+|$)/g;

// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
export var splitRootRe = isWindows ? /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/ : /^[\/]*/;
