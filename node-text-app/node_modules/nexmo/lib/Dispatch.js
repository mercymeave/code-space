"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dispatch = function () {
  _createClass(Dispatch, null, [{
    key: "PATH",
    get: function get() {
      return "/v0.1/dispatch";
    }
  }]);

  function Dispatch(credentials, options) {
    _classCallCheck(this, Dispatch);

    this.creds = credentials;
    this.options = options;

    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || _index2.default;

    this._nexmo.initialize(this.creds.apiKey, this.creds.apiSecret, this.options);
  }

  _createClass(Dispatch, [{
    key: "create",
    value: function create(template, workflow, callback) {
      var params = {
        template: template,
        workflow: workflow
      };

      return this.options.api.post(Dispatch.PATH, params, callback, true, {
        "Content-Type": "application/json"
      });
    }
  }]);

  return Dispatch;
}();

exports.default = Dispatch;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EaXNwYXRjaC5qcyJdLCJuYW1lcyI6WyJEaXNwYXRjaCIsImNyZWRlbnRpYWxzIiwib3B0aW9ucyIsImNyZWRzIiwiX25leG1vIiwibmV4bW9PdmVycmlkZSIsImluaXRpYWxpemUiLCJhcGlLZXkiLCJhcGlTZWNyZXQiLCJ0ZW1wbGF0ZSIsIndvcmtmbG93IiwiY2FsbGJhY2siLCJwYXJhbXMiLCJhcGkiLCJwb3N0IiwiUEFUSCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVNQSxROzs7d0JBQ2M7QUFDaEIsYUFBTyxnQkFBUDtBQUNEOzs7QUFFRCxvQkFBWUMsV0FBWixFQUF5QkMsT0FBekIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0MsS0FBTCxHQUFhRixXQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmOztBQUVBO0FBQ0EsU0FBS0UsTUFBTCxHQUFjLEtBQUtGLE9BQUwsQ0FBYUcsYUFBYixtQkFBZDs7QUFFQSxTQUFLRCxNQUFMLENBQVlFLFVBQVosQ0FDRSxLQUFLSCxLQUFMLENBQVdJLE1BRGIsRUFFRSxLQUFLSixLQUFMLENBQVdLLFNBRmIsRUFHRSxLQUFLTixPQUhQO0FBS0Q7Ozs7MkJBRU1PLFEsRUFBVUMsUSxFQUFVQyxRLEVBQVU7QUFDbkMsVUFBTUMsU0FBUztBQUNiSCxrQkFBVUEsUUFERztBQUViQyxrQkFBVUE7QUFGRyxPQUFmOztBQUtBLGFBQU8sS0FBS1IsT0FBTCxDQUFhVyxHQUFiLENBQWlCQyxJQUFqQixDQUFzQmQsU0FBU2UsSUFBL0IsRUFBcUNILE1BQXJDLEVBQTZDRCxRQUE3QyxFQUF1RCxJQUF2RCxFQUE2RDtBQUNsRSx3QkFBZ0I7QUFEa0QsT0FBN0QsQ0FBUDtBQUdEOzs7Ozs7a0JBR1lYLFEiLCJmaWxlIjoiRGlzcGF0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG5leG1vIGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcXVlcnlzdHJpbmcgZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5cbmNsYXNzIERpc3BhdGNoIHtcbiAgc3RhdGljIGdldCBQQVRIKCkge1xuICAgIHJldHVybiBcIi92MC4xL2Rpc3BhdGNoXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihjcmVkZW50aWFscywgb3B0aW9ucykge1xuICAgIHRoaXMuY3JlZHMgPSBjcmVkZW50aWFscztcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgLy8gVXNlZCB0byBmYWNpbGl0YXRlIHRlc3Rpbmcgb2YgdGhlIGNhbGwgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0XG4gICAgdGhpcy5fbmV4bW8gPSB0aGlzLm9wdGlvbnMubmV4bW9PdmVycmlkZSB8fCBuZXhtbztcblxuICAgIHRoaXMuX25leG1vLmluaXRpYWxpemUoXG4gICAgICB0aGlzLmNyZWRzLmFwaUtleSxcbiAgICAgIHRoaXMuY3JlZHMuYXBpU2VjcmV0LFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZSh0ZW1wbGF0ZSwgd29ya2Zsb3csIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgd29ya2Zsb3c6IHdvcmtmbG93XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBpLnBvc3QoRGlzcGF0Y2guUEFUSCwgcGFyYW1zLCBjYWxsYmFjaywgdHJ1ZSwge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXNwYXRjaDtcbiJdfQ==