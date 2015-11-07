import {sep} from 'path';

import {findNextNode} from '../lib/utils';
import FSError from '../lib/error';
import ERRORS from 'errno';

export default function mkdirSync(path) {
  var pathParts = path.split(path, sep);
  if (!pathParts.length) return;
  let current, next = this.rootNode;
  let name;

  for (let i = 0; i < pathParts.length - 1; i++) {
    name = pathParts[i];
    next = findNextNode(current, name);
    if (!next) {
      if (!isName(name)) throw new FSError(ERRORS.code.ENOENT, path);
      else next = new Node({name, isDirectory: true})
      current = next;
    }
    else if (next.data.isDirectory) throw new FSError(ERRORS.code.EEXIST, path);
    else throw new FSError(ERRORS.code.ENOTDIR, path);
  }
}
