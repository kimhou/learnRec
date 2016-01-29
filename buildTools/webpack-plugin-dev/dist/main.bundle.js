/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _b = __webpack_require__(1);

	var b = _interopRequireWildcard(_b);

	var _react = __webpack_require__(8);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module App
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Created by kimhou on 16/1/28
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var App = function (_Components) {
		_inherits(App, _Components);

		function App() {
			_classCallCheck(this, App);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					'hello'
				);
			}
		}]);

		return App;
	}(_react.Components);

	exports.default = App;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sayHello = sayHello;
	exports.helloToModule = helloToModule;

	var _a = __webpack_require__(2);

	var _ = __webpack_require__(3);

	var _2 = _interopRequireDefault(_);

	var _3 = __webpack_require__(4);

	var _4 = _interopRequireDefault(_3);

	var _5 = __webpack_require__(5);

	var _6 = _interopRequireDefault(_5);

	var _7 = __webpack_require__(6);

	var _8 = _interopRequireDefault(_7);

	var _9 = __webpack_require__(7);

	var _10 = _interopRequireDefault(_9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @module b
	 * @desc
	 * @author Created by kimhou on 16/1/28
	 */

	function sayHello() {
	  console.log(_a.Hello);
	}

	function helloToModule(moduleId) {
	  console.log({
	    1: _2.default, 2: _4.default, 3: _6.default, 4: _8.default, 5: _10.default
	  }[moduleId]);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @module a.js
	 * @desc
	 * @author Created by kimhou on 16/1/28
	 */

	var Hello = exports.Hello = 'Hello';

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * @module 1
	 * @desc
	 * @author Created by kimhou on 16/1/28
	 */
	"use strict";

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @module 2
	 * @desc
	 * @author Created by kimhou on 16/1/28
	 */

	exports.default = 'I\'m module2';

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @module 3
	 * @desc
	 * @author Created by kimhou on 16/1/28
	 */
	exports.default = 'I\'m module3';

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @module 4
	 * @desc
	 * @author Created by kimhou on 16/1/28
	 */
	exports.default = 'I\'m module4';

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @module 5
	 * @desc
	 * @author Created by kimhou on 16/1/28
	 */

	exports.default = 'I\'m module5';

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = window.React;

/***/ }
/******/ ]);