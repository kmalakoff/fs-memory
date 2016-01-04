import sysPath from 'path';
import isString from 'lodash.isstring';
import defaults from 'lodash.defaults';
import bodec from 'bodec';
import ERRORS from 'errno';
import EventHandlers from '../lib/event-handlers';
import FSError from '../lib/error';
import {findNode, findChild} from '../lib/utils';
import {Node} from 'forestry';
import {nodeIsDirectory} from '../lib/mode';
import encodings from '../lib/encodings';

export default function writeFileSync(path, data, options) {
  var parts = path.split(sysPath.sep), name = parts.pop(), parentPath = parts.join(sysPath.sep);
  let parentNode = findNode(this.rootNode, parentPath);
  if (!parentNode) throw new FSError(ERRORS.code.ENOENT, parentPath);

  let now = new Date();
  var node = findChild(parentNode, name);
  var exists = !!node;
  if (node) {
    if (nodeIsDirectory(node)) throw new FSError(ERRORS.code.EISDIR, path);
  }
  else {
    node = new Node({name, stat: {mode: 0o100000, size: 0, ctime: now, mtime: now, birthtime: now}});
    parentNode.addChild(node);
  }

  let encoding = !options || options.encoding || options;
  let stringEncoding = isString(encoding) && ~encodings.string.indexOf(encoding) ? encoding : undefined;
  node.data.contents = stringEncoding ? bodec.fromString(data, stringEncoding) : bodec.copy(data);
  node.data.stat = defaults({size: node.data.contents.length, mtime: now}, node.data.stat || {})
  EventHandlers.emit(exists ? 'update' : 'add', path);
}
