import path from 'path';
import {Node} from 'forestry';

function createNode(dataNode) {
  if (!dataNode.data.isDirectory) return new Node(dataNode.data)

  let node = new Node(dataNode.data);
  dataNode.children.forEach(childDataNode => node.addChild(createNode(childDataNode)));
  return node
}

export function _loadTree(dataNode) {
  let fs = this;
  fs.rootNode = createNode(dataNode);
}
