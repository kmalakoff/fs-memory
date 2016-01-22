import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode} from '../lib/utils';
import {nodeIsDirectory} from '../lib/mode';

export default function open(path, flags, mode) {
  let node = findNode(this.rootNode, path);
  if (node && nodeIsDirectory(node)) throw new FSError(ERRORS.code.EISDIR, path);

  return {path, isOpen: true};
}
