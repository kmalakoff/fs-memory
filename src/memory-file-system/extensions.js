import path from 'path';

export function _loadTree(node) {
  let fs = this;
  let fullPath = ['.'].concat(node.data.pathParts).join(path.sep);

  if (node.data.isDirectory) {
    fs.mkdirSync(fullPath);
    node.children.forEach((childNode) => MemoryFileSystem._loadTree(childNode));
  }
  else fs.writeFileSync(fullPath, node.data.contents);
}
