import path from 'path';
import {Node} from 'forestry';

var TIME_PROPERTIES = ['atime', 'mtime', 'ctime', 'birthtime'];

function deserializeData(data) {
  var data = Object.assign({}, data);
  if (data.stat) {
    data.stat = Object.assign({}, data.stat);
    TIME_PROPERTIES.forEach(function(time) {
      if (data.stat.hasOwnProperty(time)) data.stat[time] = new Date(data.stat[time]);
    })
  }
  return data;
}

function createNode(dataNode) {
  var data = deserializeData(dataNode.data);
  if (!dataNode.data.isDirectory) return new Node(data)

  let node = new Node(data);
  dataNode.children.forEach(childDataNode => node.addChild(createNode(childDataNode)));
  return node
}

export default function __loadTree(dataNode) {
  let fs = this;
  fs.rootNode = createNode(dataNode);
}
