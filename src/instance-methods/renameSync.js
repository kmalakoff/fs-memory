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
  var existingNode = findChild(parentNode, name);
  if (existingNode) {
    if (!!existingNode.data.isDirectory !== !!node.data.isDirectory) throw new FSError(ERRORS.code.EISDIR, options.name);
    removeChild(node.parent, existingNode.data.name);
  }
  parentNode.addChild(node);
}
