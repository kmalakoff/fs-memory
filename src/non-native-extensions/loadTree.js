import path from 'path';
import {Node} from 'forestry';
import bodec from 'bodec';
import {nodeIsDirectory} from '../lib/mode';

var DATE_PROPERTIES = ['atime', 'mtime', 'ctime', 'birthtime'];

function deserializeData(data) {
  var data = Object.assign({}, data);
  if (data.stat) {
    data.stat = Object.assign({}, data.stat);
    DATE_PROPERTIES.forEach(function(time) {
      if (data.stat.hasOwnProperty(time)) data.stat[time] = new Date(data.stat[time]);
    })
  }
  if (data.contents) data.contents = bodec.fromRaw(data.contents)
  return data;
}

function createNode(dataNode) {
  var data = deserializeData(dataNode.data);
  if (!nodeIsDirectory(dataNode)) return new Node(data)

  let node = new Node(data);
  dataNode.children.forEach(childDataNode => node.addChild(createNode(childDataNode)));
  return node
}

export default function __loadTree(dataNode) {
  let fs = this;
  fs.rootNode = createNode(dataNode);
}
