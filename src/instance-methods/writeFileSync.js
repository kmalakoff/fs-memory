import {sep} from 'path';
import _ from 'lodash';
import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode, findOrCreateChild, writeData} from '../lib/utils';

export default function writeFileSync(path, data, encoding) {
  var parts = path.split(sep), name = parts.pop(), parentPath = parts.join(sep);
  let parentNode = findNode(this.rootNode, parentPath);
  if (!parentNode) throw new FSError(ERRORS.code.ENOENT, parentPath);

  let node = findOrCreateChild(parentNode, {isDirectory: false, name});
  writeData(node, data, encoding);
}
