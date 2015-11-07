import bodec from 'bodec';
import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode} from '../lib/utils';

export default function readFileSync(path, encoding) {
  let node = findNode(this.rootNode, path);
  if (!node) throw new FSError(ERRORS.code.ENOENT, path);
  if (node.data.isDirectory) throw new FSError(ERRORS.code.EISDIR, path)

  return encoding ? bodec.toString(node.data.contents, encoding) : node.data.contents;
}
