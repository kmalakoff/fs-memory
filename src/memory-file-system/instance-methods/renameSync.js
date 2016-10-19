import sysPath from 'path';
import {removeChild, findNode, findChild} from '../lib/utils';
import EventHandlers from '../lib/event-handlers';
import FSError from '../lib/error';
import ERRORS from 'errno';
import {nodeIsDirectory} from '../lib/mode';

export default function renameSync(oldPath, newPath) {
  if (oldPath === newPath) return;

  let node = findNode(this.rootNode, oldPath);
  if (!node) throw new FSError(ERRORS.code.ENOENT, oldPath);
  removeChild(node.parent, node.data.name);

  let parts = newPath.split(sysPath.sep), name = parts.pop(), parentPath = parts.join(sysPath.sep);
  let parentNode = findNode(this.rootNode, parentPath);
  if (!parentNode) throw new FSError(ERRORS.code.ENOENT, parentPath);
  let existingNode = removeChild(parentNode, name);
  if (existingNode) {
    if (nodeIsDirectory(existingNode) !== nodeIsDirectory(node)) throw new FSError(ERRORS.code.EISDIR, options.name);
  }
  node.data.name = name;
  parentNode.addChild(node);

  if (nodeIsDirectory(node)) !existingNode || EventHandlers.emit('addDir', newPath);
  else EventHandlers.emit(existingNode ? 'update' : 'add', newPath);
}
