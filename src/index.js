import * as instanceMethods from './instance-methods';
import * as nonNativeExtensions from './non-native-extensions';

export default class MemoryFileSystem {
  constructor(rootNode) { this.rootNode = rootNode; }
}

// mixin methods
Object.keys(instanceMethods).map(key => MemoryFileSystem.prototype[key] = instanceMethods[key])
Object.keys(nonNativeExtensions).map(key => MemoryFileSystem.prototype[key] = nonNativeExtensions[key])
