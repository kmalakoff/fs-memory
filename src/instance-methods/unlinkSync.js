import {sep} from 'path';
import _ from 'lodash';
import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode, removeChild} from '../lib/utils';

export default function unlinkSync(path) {
  let node = findNode(this.rootNode, path);
  if (!node) throw new FSError(ERRORS.code.ENOENT, path);
  if (!node.parent) throw new FSError(ERRORS.code.ENOENT);
  removeChild(node.parent, node.data.name);
}
