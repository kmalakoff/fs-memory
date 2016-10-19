'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter3');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _eventHandlers = require('./event-handlers');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _nullCheck = require('./null-check');

var _nullCheck2 = _interopRequireDefault(_nullCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FSWatcher = function (_EventEmitter) {
  _inherits(FSWatcher, _EventEmitter);

  function FSWatcher() {
    _classCallCheck(this, FSWatcher);

    var _this = _possibleConstructorReturn(this, (FSWatcher.__proto__ || Object.getPrototypeOf(FSWatcher)).call(this));

    _this.onChange = function (status, event, filename) {
      if (status >= 0) return _this.emit('change', event, filename);

      _this.close();
      var error = errnoException(status, 'watch ' + filename);
      error.filename = filename;
      _this.emit('error', error);
    };

    return _this;
  }

  _createClass(FSWatcher, [{
    key: 'start',
    value: function start(filename, persistent, recursive) {
      (0, _nullCheck2.default)(filename);

      var err = _eventHandlers2.default.add(this, filename, persistent, recursive);
      if (err) {
        this.close();
        var error = errnoException(err, 'watch ' + filename);
        error.filename = filename;
        throw error;
      }
    }
  }, {
    key: 'close',
    value: function close() {
      _eventHandlers2.default.remove(this);
    }
  }]);

  return FSWatcher;
}(_eventemitter2.default);

exports.default = FSWatcher;