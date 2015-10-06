import {findNode} from '../lib/utils';

export default function readdirSync(fullPath) {
  let node = findNode(this.rootNode, fullPath);
  if (!node) throw new Error(`Path does not exist ${fullPath}`);
  if (!node.data.isDirectory) throw new Error(`Cannot readdirSync on a file ${fullPath}`);
  return node.children.map(childNode => childNode.data.name);
}
