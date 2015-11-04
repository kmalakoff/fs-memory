import ERRORS from 'errno';
import FSError from '../lib/error';
import Stat from '../lib/stat';
import {findNode} from '../lib/utils';

export default function statSync(fullPath) {
  let node = findNode(this.rootNode, fullPath);
  if (!node) throw new FSError(ERRORS.code.ENOENT, fullPath);
  return new Stat(node);
}
