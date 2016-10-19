import sysPath from 'path';
import {findNode, findChild} from '../lib/utils';
import {Node} from 'forestry';
import EventHandlers from '../lib/event-handlers';
import FSError from '../lib/error';
import ERRORS from 'errno';
import {nodeIsDirectory} from '../lib/mode';

export default function mkdirSync(path) {
  var parts = path.split(sysPath.sep), name = parts.pop(), parentPath = parts.join(sysPath.sep);
  let parentNode = findNode(this.rootNode, parentPath);
  if (!parentNode) throw new FSError(ERRORS.code.ENOENT, parentPath);
  var node = findChild(parentNode, name);
  if (node) {
    if (!nodeIsDirectory(node)) throw new FSError(ERRORS.code.ENOTDIR, path);
  }

  else {
    let now = new Date();
    node = new Node({name, stat: {mode: 0o040000, size: 0, ctime: now, mtime: now, birthtime: now}});
    parentNode.addChild(node);
    EventHandlers.emit('addDir', path);
  }
}
