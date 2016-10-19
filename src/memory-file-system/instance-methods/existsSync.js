import {findNode} from '../lib/utils';

export default function existsSync(path) {
  return !!findNode(this.rootNode, path);
}
