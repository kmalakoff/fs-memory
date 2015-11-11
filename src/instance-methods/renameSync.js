import {sep, basename} from 'path';
import {removeChild, findNode, findChild} from '../lib/utils';
import FSError from '../lib/error';
import ERRORS from 'errno';

export default function renameSync(oldPath, newPath) {
  let node = findNode(this.rootNode, oldPath);
  if (!node) throw new FSError(ERRORS.code.ENOENT, oldPath);
  var oldName = basename(oldPath);
  removeChild(node.parent, oldName);

  var parts = newPath.split(sep), name = parts.pop(), parentPath = parts.join(sep);
  var parentNode = findNode(this.rootNode, parentPath);
  if (!parentNode) throw new FSError(ERRORS.code.ENOENT, parentPath);
  var existingChild = findChild(parentNode, name);
  if (existingChild) throw new FSError(ERRORS.code.EEXIST, newPath);
  parentNode.addChild(node);
}
