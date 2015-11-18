import bodec from 'bodec';
import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode} from '../lib/utils';
import {nodeIsDirectory} from '../lib/mode';
import _ from 'lodash';

export default function readFileSync(path, options) {
  let node = findNode(this.rootNode, path);
  if (!node) throw new FSError(ERRORS.code.ENOENT, path);
  if (nodeIsDirectory(node)) throw new FSError(ERRORS.code.EISDIR, path);

  let encoding = !options || options.encoding || options;
  if (!_.isString(encoding)) encoding = undefined;

  return encoding ? bodec.toString(node.data.contents, encoding) : node.data.contents;
}
