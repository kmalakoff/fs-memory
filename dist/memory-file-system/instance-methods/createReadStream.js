'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReadStream;

var _bodec = require('bodec');

var _bodec2 = _interopRequireDefault(_bodec);

var _stream = require('stream');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createReadStream(path, options) {
  var fs = this;

  var contents = fs.readFileSync(path, options);

  if (options && (options.start || options.end)) {
    contents = _bodec2.default.slice(contents, options.start, options.end);
  }

  var stream = new _stream.PassThrough();
  setTimeout(function () {
    stream.end(new Buffer(contents));
  }, 0);
  return stream;
}