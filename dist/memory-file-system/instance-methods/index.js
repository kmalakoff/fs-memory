'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immediate = require('immediate');

var _immediate2 = _interopRequireDefault(_immediate);

var _close = require('./close');

var _close2 = _interopRequireDefault(_close);

var _createReadStream = require('./createReadStream');

var _createReadStream2 = _interopRequireDefault(_createReadStream);

var _existsSync = require('./existsSync');

var _existsSync2 = _interopRequireDefault(_existsSync);

var _lstatSync = require('./lstatSync');

var _lstatSync2 = _interopRequireDefault(_lstatSync);

var _lstatSyncNoException = require('./lstatSyncNoException');

var _lstatSyncNoException2 = _interopRequireDefault(_lstatSyncNoException);

var _mkdirSync = require('./mkdirSync');

var _mkdirSync2 = _interopRequireDefault(_mkdirSync);

var _open = require('./open');

var _open2 = _interopRequireDefault(_open);

var _readdirSync = require('./readdirSync');

var _readdirSync2 = _interopRequireDefault(_readdirSync);

var _readFileSync = require('./readFileSync');

var _readFileSync2 = _interopRequireDefault(_readFileSync);

var _realpathSync = require('./realpathSync');

var _realpathSync2 = _interopRequireDefault(_realpathSync);

var _renameSync = require('./renameSync');

var _renameSync2 = _interopRequireDefault(_renameSync);

var _statSync = require('./statSync');

var _statSync2 = _interopRequireDefault(_statSync);

var _unlinkSync = require('./unlinkSync');

var _unlinkSync2 = _interopRequireDefault(_unlinkSync);

var _watch = require('./watch');

var _watch2 = _interopRequireDefault(_watch);

var _writeFileSync = require('./writeFileSync');

var _writeFileSync2 = _interopRequireDefault(_writeFileSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slice = Array.prototype.slice;

// sync methods
var instanceMethods = {
  close: _close2.default,
  createReadStream: _createReadStream2.default,
  existsSync: _existsSync2.default,
  lstatSync: _lstatSync2.default,
  lstatSyncNoException: _lstatSyncNoException2.default,
  mkdirSync: _mkdirSync2.default,
  open: _open2.default,
  readdirSync: _readdirSync2.default, readFileSync: _readFileSync2.default, realpathSync: _realpathSync2.default,
  renameSync: _renameSync2.default,
  statSync: _statSync2.default,
  unlinkSync: _unlinkSync2.default,
  watch: _watch2.default,
  writeFileSync: _writeFileSync2.default
};

// async generated methods
['lstat', 'mkdir', 'readdir', 'readFile', 'realpath', 'rename', 'stat', 'unlink', 'writeFile'].forEach(function (name) {
  instanceMethods[name] = function () {
    var args = slice.call(arguments);
    var result = void 0,
        callback = args.pop();
    try {
      result = this[name + 'Sync'].apply(this, args);
    } catch (err) {
      return callback(err);
    }
    (0, _immediate2.default)(function () {
      callback(null, result);
    });
  };
});

// async generated methods - non-standard
['exists'].forEach(function (name) {
  instanceMethods[name] = function () {
    var _this = this;

    var args = slice.call(arguments);
    var result = void 0,
        callback = args.pop();
    (0, _immediate2.default)(function () {
      callback(_this[name + 'Sync'].apply(_this, args));
    });
  };
});

exports.default = instanceMethods;