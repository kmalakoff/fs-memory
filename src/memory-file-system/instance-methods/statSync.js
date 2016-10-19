import ERRORS from 'errno';
import FSError from '../lib/error';
import Stat from '../lib/stat';
import {findNode} from '../lib/utils';

export default function statSync(path) {
  let node = findNode(this.rootNode, path);
  if (!node) throw new FSError(ERRORS.code.ENOENT, path);
  return new Stat(node);
}
