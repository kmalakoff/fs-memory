import bodec from 'bodec';
import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode} from '../lib/utils';

export default function readFileSync(fullPath, encoding) {
  let node = findNode(this.rootNode, fullPath);
  if (!node) throw new FSError(ERRORS.code.ENOENT, fullPath);
  if (node.data.isDirectory) throw new FSError(ERRORS.code.EISDIR, fullPath)

  return encoding ? bodec.toString(node.data.contents, encoding) : node.data.contents;
}
