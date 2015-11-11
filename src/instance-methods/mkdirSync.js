import {sep} from 'path';
import {findNode, findOrCreateChild} from '../lib/utils';
import FSError from '../lib/error';
import ERRORS from 'errno';

export default function mkdirSync(path) {
  var parts = path.split(sep), name = parts.pop(), parentPath = parts.join(sep);
  let parentNode = findNode(this.rootNode, parentPath);
  if (!parentNode) throw new FSError(ERRORS.code.ENOENT, parentPath);
  var node = findOrCreateChild(parentNode, {isDirectory: true, name});
  if (!node.data.isDirectory) throw new FSError(ERRORS.code.ENOTDIR, path);
}
