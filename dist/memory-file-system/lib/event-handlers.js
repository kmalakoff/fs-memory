'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash.difference');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventHandler = function EventHandler(owner, filename, persistent, recursive) {
  _classCallCheck(this, EventHandler);

  this.owner = owner;
  this.filename = filename;
  this.persistent = persistent;
  this.recursive = recursive;
};

var handlers = [];

var EventHandlers = function () {
  function EventHandlers() {
    _classCallCheck(this, EventHandlers);
  }

  _createClass(EventHandlers, null, [{
    key: 'add',
    value: function add(owner, filename, persistent, recursive) {
      handlers.push(new EventHandler(owner, filename, persistent, recursive));
    }
  }, {
    key: 'remove',
    value: function remove(owner) {
      handlers = handlers.filter(function (handler) {
        return handler.owner !== owner;
      });
    }
  }, {
    key: 'emit',
    value: function emit(event, path) {
      var emitHandlers = handlers.filter(function (handler) {
        return handler.recursive ? !handler.filename.startsWith(path) : handler.filename === path;
      });
      emitHandlers.forEach(function (handler) {
        return handler.owner.onChange(0, event, path);
      });

      // remove single time handlers
      emitHandlers = emitHandlers.filter(function (handler) {
        return !handler.persistent;
      });
      if (emitHandlers.length) {
        handlers = (0, _lodash2.default)(handlers, emitHandlers);
        emitHandlers.forEach(function (handler) {
          return handler.owner.close();
        });
      }
    }
  }]);

  return EventHandlers;
}();

exports.default = EventHandlers;