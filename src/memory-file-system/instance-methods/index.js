import immediate from 'immediate';

import close from './close';
import createReadStream from './createReadStream';
import existsSync from './existsSync';
import lstatSync from './lstatSync';
import lstatSyncNoException from './lstatSyncNoException';
import mkdirSync from './mkdirSync';
import open from './open';
import readdirSync from './readdirSync';
import readFileSync from './readFileSync';
import realpathSync from './realpathSync';
import renameSync from './renameSync';
import statSync from './statSync';
import unlinkSync from './unlinkSync';
import watch from './watch';
import writeFileSync from './writeFileSync';

var slice = Array.prototype.slice;

// sync methods
let instanceMethods = {
  close,
  createReadStream,
  existsSync,
  lstatSync,
  lstatSyncNoException,
  mkdirSync,
  open,
  readdirSync, readFileSync, realpathSync,
  renameSync,
  statSync,
  unlinkSync,
  watch,
  writeFileSync
};

// async generated methods
['lstat', 'mkdir', 'readdir', 'readFile', 'realpath', 'rename', 'stat', 'unlink', 'writeFile'].forEach(name => {
  instanceMethods[name] = function() {
    let args = slice.call(arguments);
    let result, callback = args.pop();
    try { result = this[`${name}Sync`].apply(this, args); } catch(err) { return callback(err); }
    immediate(() => { callback(null, result); });
  };
});

// async generated methods - non-standard
['exists'].forEach(name => {
  instanceMethods[name] = function() {
    let args = slice.call(arguments);
    let result, callback = args.pop();
    immediate(() => { callback(this[`${name}Sync`].apply(this, args)); });
  };
});

export default instanceMethods;
