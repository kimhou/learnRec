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

	/**
	 * @module index.js
	 * @desc
	 * @author Created by kimhou on 15/12/25
	 */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsList = __webpack_require__(1);

	var _componentsList2 = _interopRequireDefault(_componentsList);

	ReactDOM.render(React.createElement(
	  'div',
	  { style: { padding: 50, background: '#ccc' } },
	  React.createElement(_componentsList2['default'], { list: [1, 2] })
	), document.getElementById('root'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @module List
	 * @desc list
	 * @author Created by kimhou on 15/12/30
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var style = '.example-enter {\
	opacity: 0.01;\
	margin-right:-100px;\
	transition: opacity 1s ease-in;\
	}\
	\
	.example-enter.example-enter-active {\
	  opacity: 1;\
	  margin-right:0;\
	}\
	\
	.example-leave {\
	  opacity: 1;\
	  transition: opacity 1s ease-in;\
	}\
	\
	.example-leave.example-leave-active {\
	  opacity: 0.01;\
	  margin-left:-100px;\
	}\
	\
	.item {\
		display: inline-block;\
	  width:100px;\
	  border:1px solid red;\
	  padding:10px;\
	  margin:10px;\
	}';

	var CSSTransitionGroup = React.addons.CSSTransitionGroup;
	var count = 4;

	var List = React.createClass({
		displayName: 'List',

		getInitialState: function getInitialState() {
			return {
				list: [0, 1, 2, 3]
			};
		},

		add: function add() {
			var list = this.state.list.concat([prompt('Enter some text')]);
			this.setState({
				list: list
			});
		},

		render: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'style',
					null,
					style
				),
				React.createElement(
					'a',
					{ href: 'javascript:;',
						onClick: this.add.bind(this) },
					'add'
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						CSSTransitionGroup,
						{ transitionName: 'example',
							transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
						this.state.list.map(function (item) {
							return React.createElement(
								'div',
								{ className: 'item' },
								item
							);
						})
					)
				)
			);
		}
	});

	exports['default'] = List;
	module.exports = exports['default'];

/***/ }
/******/ ]);