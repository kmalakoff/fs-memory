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
  let rootName = pathParts.shift();
  if (current.data.name !== rootName) return null;

  // children
  for (let name of pathParts) {
    current = findNextNode(current, name)
    if (!current) return null;
  }
  return current;
}
