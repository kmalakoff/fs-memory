import bodec from 'bodec';
import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode} from '../lib/utils';
import {nodeIsDirectory} from '../lib/mode';
import _ from 'lodash';
import encodings from '../lib/encodings';

export default function readFileSync(path, options) {
  let node = findNode(this.rootNode, path);
  if (!node) throw new FSError(ERRORS.code.ENOENT, path);
  if (nodeIsDirectory(node)) throw new FSError(ERRORS.code.EISDIR, path);

  let encoding = !options || options.encoding || options;
  let stringEncoding = _.isString(encoding) && ~encodings.string.indexOf(encoding) ? encoding : undefined;
  return stringEncoding ? bodec.toString(node.data.contents, stringEncoding) : node.data.contents;
}
