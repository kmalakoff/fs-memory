import Stat from '../lib/stat';
import {findNode} from '../lib/utils';

export default function statSync(fullPath) {
  let node = findNode(this.rootNode, fullPath);
  if (!node) throw new Error(`Path does not exist ${fullPath}`);
  return new Stat(node);
}
