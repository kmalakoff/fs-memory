import path from 'path';

export function findChild(node, name) { return node.children.find(childNode => childNode.data.name === name); }

export function findNode(node, fullPath) {
  let current = node;
  let pathParts = fullPath.split(path.sep);

  for (let name in pathParts) {
    current = current.find(node => node.data.name == name);
    if (!current) return null;
  }
  return current;
}
