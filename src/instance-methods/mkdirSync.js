import {sep} from 'path';
import {findNode, findChild} from '../lib/utils';
import {Node} from 'forestry';
import EventHandlers from '../lib/event-handlers';
import FSError from '../lib/error';
import ERRORS from 'errno';

export default function mkdirSync(path) {
  var parts = path.split(sep), name = parts.pop(), parentPath = parts.join(sep);
  let parentNode = findNode(this.rootNode, parentPath);
  if (!parentNode) throw new FSError(ERRORS.code.ENOENT, parentPath);
  var node = findChild(parentNode, name);
  if (node) {
    if (!node.data.isDirectory) throw new FSError(ERRORS.code.ENOTDIR, path);
  }
  else {
    parentNode.addChild(new Node({isDirectory: true, name}));
    EventHandlers.emit('addDir', path);
  }
}
