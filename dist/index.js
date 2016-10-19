'use strict';

var _index = require('./src/index');

var _index2 = _interopRequireDefault(_index);

var _stat = require('./src/lib/stat');

var _stat2 = _interopRequireDefault(_stat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { MemoryFileSystem: _index2.default, Stat: _stat2.default };