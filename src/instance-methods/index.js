import dz from 'dezalgo';

import existsSync from './existsSync';
import lstatSync from './lstatSync';
import lstatSyncNoException from './lstatSyncNoException';
import mkdirSync from './mkdirSync';
import readdirSync from './readdirSync';
import readFileSync from './readFileSync';
import realpathSync from './realpathSync';
import statSync from './statSync';

// sync methods
let instanceMethods = {
  existsSync,
  lstatSync,
  lstatSyncNoException,
  mkdirSync,
  readdirSync,
  readFileSync,
  realpathSync,
  statSync
};

// async generated methods
['lstat', 'mkdir', 'readdir', 'readFile', 'realpath', 'stat'].forEach(name => {
  instanceMethods[name] = function(...args) {
    let result, callback = dz(args.pop());
    try { result = this[`${name}Sync`](...args); } catch(err) { return callback(err); }
    return callback(null, result);
  };
});

export default instanceMethods;
