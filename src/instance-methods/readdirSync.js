import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode} from '../lib/utils';

export default function readdirSync(fullPath) {
  let node = findNode(this.rootNode, fullPath);
  if (!node) throw new FSError(ERRORS.code.ENOENT, fullPath);
  if (!node.data.isDirectory) throw new FSError(ERRORS.code.ENOTDIR, fullPath);
  return node.children.map(childNode => childNode.data.name);
}
