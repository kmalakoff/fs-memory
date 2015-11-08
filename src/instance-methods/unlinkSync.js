import {sep} from 'path';
import _ from 'lodash';
import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode} from '../lib/utils';

export default function unlinkSync(path) {
  let node = findNode(this.rootNode, path);
  if (!node) throw new FSError(ERRORS.code.ENOENT, path);
  if (!node.parent) throw new FSError(ERRORS.code.ENOENT);

  let name = node.data.name;
  let index = _.findIndex(node.parent.children, childNode => childNode.data.name == name);
  if (index<0) throw new FSError(ERRORS.code.ENOENT);
  node.parent.children.splice(index, 1);
}
