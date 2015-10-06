import {findNode} from '../lib/utils';

export default function existsSync(fullPath) {
  return !!findNode(this.rootNode, fullPath);
}
