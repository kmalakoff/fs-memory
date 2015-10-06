import {findNode} from '../lib/utils';
import bodec from 'bodec';

export default function readFileSync(fullPath, encoding) {
  let node = findNode(this.rootNode, fullPath);
  if (!node) throw new Error(`Path does not exist ${fullPath}`);
  if (node.data.isDirectory) throw new Error(`Cannot readFile on a directory ${fullPath}`);

  let contents = bodec.fromRaw(node.data.contents);
  return encoding ? bodec.toString(contents, encoding) : contents;
}
