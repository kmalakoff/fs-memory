import path from 'path';

import {findNextNode} from '../lib/utils';
import FSError from '../lib/error';
import ERRORS from 'errno';

export default function mkdirSync(fullPath) {
  var pathParts = path.split(fullPath, path.sep);
  if (!pathParts.length) return;
  let current, next = this.rootNode;
  let name;

  for (let i = 0; i < pathParts.length - 1; i++) {
    name = pathParts[i];
    next = findNextNode(current, name);
    if (!next) {
      if (!isName(name)) throw new FSError(ERRORS.code.ENOENT, fullPath);
      else next = new Node({name, isDirectory: true})
      current = next;
    }
    else if (next.data.isDirectory) throw new FSError(ERRORS.code.EEXIST, fullPath);
    else throw new FSError(ERRORS.code.ENOTDIR, fullPath);
  }
}
