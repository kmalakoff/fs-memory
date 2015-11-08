import dz from 'dezalgo';
import _ from 'lodash';

import existsSync from './existsSync';
import lstatSync from './lstatSync';
import lstatSyncNoException from './lstatSyncNoException';
import mkdirSync from './mkdirSync';
import readdirSync from './readdirSync';
import readFileSync from './readFileSync';
import realpathSync from './realpathSync';
import statSync from './statSync';
import unlinkSync from './unlinkSync';
import writeFileSync from './writeFileSync';

// sync methods
let instanceMethods = {
  existsSync,
  lstatSync,
  lstatSyncNoException,
  mkdirSync,
  readdirSync, readFileSync, realpathSync,
  statSync,
  unlinkSync,
  writeFileSync
};

// async generated methods
['lstat', 'mkdir', 'readdir', 'readFile', 'realpath', 'stat', 'unlink', 'writeFile'].forEach(name => {
  instanceMethods[name] = function() {
    let args = _.toArray(arguments);
    let result, callback = dz(args.pop());
    try { result = this[`${name}Sync`].apply(this, args); } catch(err) { return callback(err); }
    return callback(null, result);
  };
});

// async generated methods - non-standard
['exists'].forEach(name => {
  instanceMethods[name] = function() {
    let args = _.toArray(arguments);
    let result, callback = dz(args.pop());
    callback(this[`${name}Sync`].apply(this, args));
  };
});

export default instanceMethods;
