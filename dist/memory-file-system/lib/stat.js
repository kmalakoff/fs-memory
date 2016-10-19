'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mode = require('./mode');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stat = function () {
  function Stat(node) {
    _classCallCheck(this, Stat);

    Object.assign(this, node.data.stat || {});
  }

  _createClass(Stat, [{
    key: 'isFile',
    value: function isFile() {
      return (0, _mode.isFile)(this.mode);
    }
  }, {
    key: 'isDirectory',
    value: function isDirectory() {
      return (0, _mode.isDirectory)(this.mode);
    }
  }, {
    key: 'isBlockDevice',
    value: function isBlockDevice() {
      return false;
    }
  }, {
    key: 'isCharacterDevice',
    value: function isCharacterDevice() {
      return false;
    }
  }, {
    key: 'isSymbolicLink',
    value: function isSymbolicLink() {
      return false;
    }
  }, {
    key: 'isFIFO',
    value: function isFIFO() {
      return false;
    }
  }, {
    key: 'isSocket',
    value: function isSocket() {
      return false;
    }
  }]);

  return Stat;
}();

exports.default = Stat;