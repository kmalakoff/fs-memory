"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModeUtils = function () {
  function ModeUtils() {
    _classCallCheck(this, ModeUtils);
  }

  _createClass(ModeUtils, null, [{
    key: "isFile",
    value: function isFile(mode) {
      return !!(mode & 32768);
    }
  }, {
    key: "isDirectory",
    value: function isDirectory(mode) {
      return !!(mode & 16384);
    }
  }, {
    key: "nodeIsFile",
    value: function nodeIsFile(node) {
      return !!(node.data.stat.mode & 32768);
    }
  }, {
    key: "nodeIsDirectory",
    value: function nodeIsDirectory(node) {
      return !!(node.data.stat.mode & 16384);
    }
  }]);

  return ModeUtils;
}();

exports.default = ModeUtils;