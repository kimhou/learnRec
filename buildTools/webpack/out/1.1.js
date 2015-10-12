webpackJsonp([1],{

/***/ 7:
/***/ function(module, exports) {

	/**
	 * @module mod1
	 * @description
	 * @author kimhou create on 15/10/12 10:07
	 */

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	module.exports = (function () {
	    function _class() {
	        var _this = this;

	        var name = arguments.length <= 0 || arguments[0] === undefined ? 'mod1' : arguments[0];

	        _classCallCheck(this, _class);

	        this.name = name;
	        [1, 8, 3].sort(function (a, b) {
	            console.log(_this.name);return a > b ? 1 : -1;
	        });
	    }

	    _createClass(_class, [{
	        key: 'say',
	        value: function say() {
	            var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	            $('body').append('<div class="border">' + str + '</div>');
	        }
	    }]);

	    return _class;
	})();

/***/ }

});