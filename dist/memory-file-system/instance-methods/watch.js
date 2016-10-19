'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = watch;

var _watcher = require('../lib/watcher');

var _watcher2 = _interopRequireDefault(_watcher);

var _nullCheck = require('../lib/null-check');

var _nullCheck2 = _interopRequireDefault(_nullCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function watch(filename, options, listener) {
  (0, _nullCheck2.default)(filename);
  var watcher;
  var options;
  var listener;

  if (arguments[1] !== null && _typeof(arguments[1]) === 'object') {
    options = arguments[1];
    listener = arguments[2];
  } else {
    options = {};
    listener = arguments[1];
  }

  if (options.persistent === undefined) options.persistent = true;
  if (options.recursive === undefined) options.recursive = false;

  watcher = new _watcher2.default();
  watcher.start(filename, options.persistent, options.recursive);
  if (listener) watcher.addListener('change', listener);
  return watcher;
}