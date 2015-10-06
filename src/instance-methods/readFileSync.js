import {findNode} from '../lib/utils';

export default function readFileSync(fullPath, encoding) {
  let node = findNode(this.rootNode, fullPath);
  if (!node) throw new Error(`Path does not exist ${fullPath}`);
  if (node.data.isDirectory) throw new Error(`Cannot readFile on a directory ${fullPath}`);
  return encoding ? node.data.contents.toString(encoding) : node.data.contents;
}
