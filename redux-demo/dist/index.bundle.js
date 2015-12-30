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

	var _containersIndexJsx = __webpack_require__(3);

	var _containersIndexJsx2 = _interopRequireDefault(_containersIndexJsx);

	var _componentsList = __webpack_require__(6);

	var _componentsList2 = _interopRequireDefault(_componentsList);

	ReactDOM.render(React.createElement(
	  'div',
	  { style: { padding: 50, background: '#ccc' } },
	  React.createElement(_componentsList2['default'], { list: [1, 2] })
	), document.getElementById('root'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module Select
	 * @desc 下拉选择器
	 * @author Created by kimhou on 15/12/15
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Select = _react2['default'].createClass({
		displayName: 'Select',

		PropTypes: {
			list: _react2['default'].PropTypes.array.isRequired,
			selected: _react2['default'].PropTypes.any.isRequired,
			disabled: _react2['default'].PropTypes.bool,
			onChange: _react2['default'].PropTypes.func,
			width: _react2['default'].PropTypes.number,
			maxWidth: _react2['default'].PropTypes.number,
			classes: _react2['default'].PropTypes.array
		},

		getDefaultProps: function getDefaultProps() {
			return {
				list: [],
				selected: undefined,
				disabled: false,
				onChange: function onChange() {},
				classes: [],
				width: 'auto',
				maxWidth: '20em'
			};
		},

		getInitialState: function getInitialState() {
			return {
				isOpen: false
			};
		},

		toggleOpen: function toggleOpen() {
			var isOpen = arguments.length <= 0 || arguments[0] === undefined ? !this.state.isOpen : arguments[0];

			!this.props.disabled && this.setState({
				isOpen: isOpen
			});
		},

		onSeletedItem: function onSeletedItem(regionId, region) {
			this.toggleOpen();
			this.props.onChange(regionId, region);
		},

		getSelectedItem: function getSelectedItem() {
			var _this = this;

			var selected = $.grep(this.props.list, function (x) {
				return x.value == _this.props.selected;
			});
			return selected && selected.length && selected[0];
		},

		render: function render() {
			var _this2 = this;

			var classesObj = {
				'tc-15-dropdown': true,
				'tc-15-menu-active': this.state.isOpen,
				'disabled': this.props.disabled || this.props.list.length === 0
			};
			this.props.classes.map(function (item) {
				classesObj[item] = true;
			});
			var classes = (0, _classnames2['default'])(classesObj);
			var selectedItem = this.getSelectedItem();
			return _react2['default'].createElement(
				'div',
				{ ref: 'container',
					className: classes },
				_react2['default'].createElement(
					'a',
					{ onClick: this.toggleOpen.bind(this, undefined),
						style: { width: this.props.width, maxWidth: this.props.maxWidth },
						href: 'javascript:;',
						className: 'tc-15-dropdown-link' },
					selectedItem && selectedItem.text || '无数据',
					_react2['default'].createElement('i', {
						className: 'caret' })
				),
				_react2['default'].createElement(
					'ul',
					{ className: 'tc-15-dropdown-menu', role: 'menu' },
					this.props.list.map(function (item) {
						return _react2['default'].createElement(
							'li',
							{ role: 'presentation',
								className: (0, _classnames2['default'])({ 'selected': _this2.props.selected == item.value }) },
							_react2['default'].createElement(
								'a',
								{ onClick: _this2.onSeletedItem.bind(_this2, item.value, item),
									role: 'menuitem',
									href: 'javascript:;' },
								item.text
							)
						);
					})
				)
			);
		}
	});

	exports['default'] = Select;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = window.React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	'use strict';

	(function () {
		'use strict';

		var hasOwn = ({}).hasOwnProperty;

		function classNames() {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 6 */
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