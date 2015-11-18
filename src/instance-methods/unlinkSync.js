import {sep} from 'path';
import _ from 'lodash';
import ERRORS from 'errno';
import FSError from '../lib/error';
import EventHandlers from '../lib/event-handlers';
import {findNode, removeChild} from '../lib/utils';
import {nodeIsDirectory} from '../lib/mode';

export default function unlinkSync(path) {
  let node = findNode(this.rootNode, path);
  if (!node) throw new FSError(ERRORS.code.ENOENT, path);
  if (!node.parent) throw new FSError(ERRORS.code.ENOENT);
  removeChild(node.parent, node.data.name);
  EventHandlers.emit(nodeIsDirectory(node) ? 'unlinkDir' : 'unlink', path);
}
