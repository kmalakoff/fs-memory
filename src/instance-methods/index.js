import _ from 'lodash';
import setimmediate from 'setimmediate';

import createReadStream from './createReadStream';
import existsSync from './existsSync';
import lstatSync from './lstatSync';
import lstatSyncNoException from './lstatSyncNoException';
import mkdirSync from './mkdirSync';
import readdirSync from './readdirSync';
import readFileSync from './readFileSync';
import realpathSync from './realpathSync';
import renameSync from './renameSync';
import statSync from './statSync';
import unlinkSync from './unlinkSync';
import watch from './watch';
import writeFileSync from './writeFileSync';

// sync methods
let instanceMethods = {
  createReadStream,
  existsSync,
  lstatSync,
  lstatSyncNoException,
  mkdirSync,
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
    let args = _.toArray(arguments);
    let result, callback = setImmediate(args.pop());
    try { result = this[`${name}Sync`].apply(this, args); } catch(err) { return callback(err); }
    return callback(null, result);
  };
});

// async generated methods - non-standard
['exists'].forEach(name => {
  instanceMethods[name] = function() {
    let args = _.toArray(arguments);
    let result, callback = setImmediate(args.pop());
    callback(this[`${name}Sync`].apply(this, args));
  };
});

export default instanceMethods;
