import {sep} from 'path';
import _ from 'lodash';
import bodec from 'bodec';
import ERRORS from 'errno';
import EventHandlers from '../lib/event-handlers';
import FSError from '../lib/error';
import {findNode, findChild, writeData} from '../lib/utils';

export default function writeFileSync(path, data, encoding) {
  var parts = path.split(sep), name = parts.pop(), parentPath = parts.join(sep);
  let parentNode = findNode(this.rootNode, parentPath);
  if (!parentNode) throw new FSError(ERRORS.code.ENOENT, parentPath);

  let now = new Date();
  var node = findChild(parentNode, name);
  var exists = !!node;
  if (node) {
    if (node.data.isDirectory) throw new FSError(ERRORS.code.EISDIR, path);
  }
  else {
    node = new Node({isDirectory: false, name, stat: {size: 0, ctime: now, mtime: now, birthtime: now}});
  }
  node.data.contents = encoding ? bodec.fromString(data, encoding) : bodec.copy(data);
  node.data.stat = _.defaults({size: node.data.contents.length, mtime: now}, node.data.stat || {})
  EventHandlers.emit(exists ? 'update' : 'add', path);
}
