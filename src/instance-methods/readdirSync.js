import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode} from '../lib/utils';

export default function readdirSync(path) {
  let node = findNode(this.rootNode, path);
  if (!node) throw new FSError(ERRORS.code.ENOENT, path);
  if (!node.data.isDirectory) throw new FSError(ERRORS.code.ENOTDIR, path);
  return node.children.map(childNode => childNode.data.name);
}
