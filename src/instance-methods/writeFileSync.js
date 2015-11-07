import {sep} from 'path';
import _ from 'lodash';
import ERRORS from 'errno';
import FSError from '../lib/error';
import {findNode, findOrCreateChildNode, writeData} from '../lib/utils';

export default function writeFileSync(path, data, encoding) {
  let pathParts = path.split(sep);
  let name = pathParts[pathParts.length-1];
  let parentFullPath = pathParts.slice(0, pathParts.length-1).join(sep);
  let parentNode = findNode(this.rootNode, parentFullPath);
  if (!parentNode) throw new FSError(ERRORS.code.ENOENT, parentFullPath);

  let node = findOrCreateChildNode(parentNode, {isDirectory: false, name, pathParts});
  writeData(node, data, encoding);
}
