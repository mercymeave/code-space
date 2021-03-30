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

var Channel = function () {
  _createClass(Channel, null, [{
    key: "PATH",
    get: function get() {
      return "/v0.1/messages";
    }
  }]);

  function Channel(credentials, options) {
    _classCallCheck(this, Channel);

    this.creds = credentials;
    this.options = options;

    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || _index2.default;

    this._nexmo.initialize(this.creds.apiKey, this.creds.apiSecret, this.options);
  }

  _createClass(Channel, [{
    key: "send",
    value: function send(to, from, message, callback) {
      var params = {
        to: to,
        from: from,
        message: message
      };

      return this.options.api.post(Channel.PATH, params, callback, true, {
        "Content-Type": "application/json"
      });
    }
  }]);

  return Channel;
}();

exports.default = Channel;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DaGFubmVsLmpzIl0sIm5hbWVzIjpbIkNoYW5uZWwiLCJjcmVkZW50aWFscyIsIm9wdGlvbnMiLCJjcmVkcyIsIl9uZXhtbyIsIm5leG1vT3ZlcnJpZGUiLCJpbml0aWFsaXplIiwiYXBpS2V5IiwiYXBpU2VjcmV0IiwidG8iLCJmcm9tIiwibWVzc2FnZSIsImNhbGxiYWNrIiwicGFyYW1zIiwiYXBpIiwicG9zdCIsIlBBVEgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEsTzs7O3dCQUNjO0FBQ2hCLGFBQU8sZ0JBQVA7QUFDRDs7O0FBRUQsbUJBQVlDLFdBQVosRUFBeUJDLE9BQXpCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtDLEtBQUwsR0FBYUYsV0FBYjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjs7QUFFQTtBQUNBLFNBQUtFLE1BQUwsR0FBYyxLQUFLRixPQUFMLENBQWFHLGFBQWIsbUJBQWQ7O0FBRUEsU0FBS0QsTUFBTCxDQUFZRSxVQUFaLENBQ0UsS0FBS0gsS0FBTCxDQUFXSSxNQURiLEVBRUUsS0FBS0osS0FBTCxDQUFXSyxTQUZiLEVBR0UsS0FBS04sT0FIUDtBQUtEOzs7O3lCQUVJTyxFLEVBQUlDLEksRUFBTUMsTyxFQUFTQyxRLEVBQVU7QUFDaEMsVUFBTUMsU0FBUztBQUNiSixZQUFJQSxFQURTO0FBRWJDLGNBQU1BLElBRk87QUFHYkMsaUJBQVNBO0FBSEksT0FBZjs7QUFNQSxhQUFPLEtBQUtULE9BQUwsQ0FBYVksR0FBYixDQUFpQkMsSUFBakIsQ0FBc0JmLFFBQVFnQixJQUE5QixFQUFvQ0gsTUFBcEMsRUFBNENELFFBQTVDLEVBQXNELElBQXRELEVBQTREO0FBQ2pFLHdCQUFnQjtBQURpRCxPQUE1RCxDQUFQO0FBR0Q7Ozs7OztrQkFHWVosTyIsImZpbGUiOiJDaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBuZXhtbyBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuXG5jbGFzcyBDaGFubmVsIHtcbiAgc3RhdGljIGdldCBQQVRIKCkge1xuICAgIHJldHVybiBcIi92MC4xL21lc3NhZ2VzXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihjcmVkZW50aWFscywgb3B0aW9ucykge1xuICAgIHRoaXMuY3JlZHMgPSBjcmVkZW50aWFscztcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgLy8gVXNlZCB0byBmYWNpbGl0YXRlIHRlc3Rpbmcgb2YgdGhlIGNhbGwgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0XG4gICAgdGhpcy5fbmV4bW8gPSB0aGlzLm9wdGlvbnMubmV4bW9PdmVycmlkZSB8fCBuZXhtbztcblxuICAgIHRoaXMuX25leG1vLmluaXRpYWxpemUoXG4gICAgICB0aGlzLmNyZWRzLmFwaUtleSxcbiAgICAgIHRoaXMuY3JlZHMuYXBpU2VjcmV0LFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgKTtcbiAgfVxuXG4gIHNlbmQodG8sIGZyb20sIG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgdG86IHRvLFxuICAgICAgZnJvbTogZnJvbSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcGkucG9zdChDaGFubmVsLlBBVEgsIHBhcmFtcywgY2FsbGJhY2ssIHRydWUsIHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbDtcbiJdfQ==