(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-sigrid", ["react"], factory);
	else if(typeof exports === 'object')
		exports["react-sigrid"] = factory(require("react"));
	else
		root["react-sigrid"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;

	var _Row = __webpack_require__(2);

	Object.defineProperty(exports, 'Row', {
	  enumerable: true,
	  get: function () {
	    function get() {
	      return _interopRequireDefault(_Row)['default'];
	    }

	    return get;
	  }()
	});

	var _Col = __webpack_require__(5);

	Object.defineProperty(exports, 'Col', {
	  enumerable: true,
	  get: function () {
	    function get() {
	      return _interopRequireDefault(_Col)['default'];
	    }

	    return get;
	  }()
	});

	__webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var Row = _react2['default'].createClass({
	    displayName: 'Row',


	    propTypes: {
	        className: _react2['default'].PropTypes.string,
	        children: _react2['default'].PropTypes.node
	    },

	    render: function () {
	        function render() {

	            return _react2['default'].createElement(
	                'div',
	                _extends({}, this.props, { className: (0, _classnames2['default'])(this.props.className, 'row') }),
	                this.props.children
	            );
	        }

	        return render;
	    }()
	});

	exports['default'] = Row;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
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
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var sizes = ['large', 'medium', 'small'];

	var Col = _react2['default'].createClass({
	    displayName: 'Col',

	    propTypes: {
	        small: _react2['default'].PropTypes.number,
	        medium: _react2['default'].PropTypes.number,
	        large: _react2['default'].PropTypes.number,

	        smallOffset: _react2['default'].PropTypes.number,
	        mediumOffset: _react2['default'].PropTypes.number,
	        largeOffset: _react2['default'].PropTypes.number,

	        className: _react2['default'].PropTypes.string,
	        children: _react2['default'].PropTypes.node
	    },

	    render: function () {
	        function render() {
	            var classes = { 'col': true };

	            var _props = this.props;
	            var small = _props.small;
	            var medium = _props.medium;
	            var large = _props.large;
	            var smallOffset = _props.smallOffset;
	            var mediumOffset = _props.mediumOffset;
	            var largeOffset = _props.largeOffset;
	            var className = _props.className;
	            var children = _props.children;

	            var props = _objectWithoutProperties(_props, ['small', 'medium', 'large', 'smallOffset', 'mediumOffset', 'largeOffset', 'className', 'children']);

	            var cols = { small: small, medium: medium, large: large, smallOffset: smallOffset, mediumOffset: mediumOffset, largeOffset: largeOffset };

	            sizes.forEach(function (size) {

	                var prop = size;
	                var classPart = size + '-';

	                if (cols[prop] > 0) {
	                    classes[classPart + cols[prop]] = true;
	                }

	                prop = size + 'Offset';
	                classPart = size + '-offset-';
	                if (cols[prop] > 0) {
	                    classes[classPart + cols[prop]] = true;
	                }
	            });

	            return _react2['default'].createElement(
	                'div',
	                _extends({}, props, { className: (0, _classnames2['default'])(className, classes) }),
	                children
	            );
	        }

	        return render;
	    }()
	});

	exports['default'] = Col;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".row {\n  margin-left: auto;\n  margin-right: auto; }\n  .row:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row .col {\n    float: left;\n    box-sizing: border-box;\n    padding: 0 0.75rem;\n    min-height: 1px; }\n    .row .col.small-1 {\n      width: 8.33333%; }\n    .row .col.small-offset-1 {\n      margin-left: 8.33333%; }\n    .row .col.small-2 {\n      width: 16.66667%; }\n    .row .col.small-offset-2 {\n      margin-left: 16.66667%; }\n    .row .col.small-3 {\n      width: 25%; }\n    .row .col.small-offset-3 {\n      margin-left: 25%; }\n    .row .col.small-4 {\n      width: 33.33333%; }\n    .row .col.small-offset-4 {\n      margin-left: 33.33333%; }\n    .row .col.small-5 {\n      width: 41.66667%; }\n    .row .col.small-offset-5 {\n      margin-left: 41.66667%; }\n    .row .col.small-6 {\n      width: 50%; }\n    .row .col.small-offset-6 {\n      margin-left: 50%; }\n    .row .col.small-7 {\n      width: 58.33333%; }\n    .row .col.small-offset-7 {\n      margin-left: 58.33333%; }\n    .row .col.small-8 {\n      width: 66.66667%; }\n    .row .col.small-offset-8 {\n      margin-left: 66.66667%; }\n    .row .col.small-9 {\n      width: 75%; }\n    .row .col.small-offset-9 {\n      margin-left: 75%; }\n    .row .col.small-10 {\n      width: 83.33333%; }\n    .row .col.small-offset-10 {\n      margin-left: 83.33333%; }\n    .row .col.small-11 {\n      width: 91.66667%; }\n    .row .col.small-offset-11 {\n      margin-left: 91.66667%; }\n    .row .col.small-12 {\n      width: 100%; }\n    .row .col.small-offset-12 {\n      margin-left: 100%; }\n    @media (min-width: 601px) {\n      .row .col.medium-1 {\n        width: 8.33333%; }\n      .row .col.medium-offset-1 {\n        margin-left: 8.33333%; }\n      .row .col.medium-2 {\n        width: 16.66667%; }\n      .row .col.medium-offset-2 {\n        margin-left: 16.66667%; }\n      .row .col.medium-3 {\n        width: 25%; }\n      .row .col.medium-offset-3 {\n        margin-left: 25%; }\n      .row .col.medium-4 {\n        width: 33.33333%; }\n      .row .col.medium-offset-4 {\n        margin-left: 33.33333%; }\n      .row .col.medium-5 {\n        width: 41.66667%; }\n      .row .col.medium-offset-5 {\n        margin-left: 41.66667%; }\n      .row .col.medium-6 {\n        width: 50%; }\n      .row .col.medium-offset-6 {\n        margin-left: 50%; }\n      .row .col.medium-7 {\n        width: 58.33333%; }\n      .row .col.medium-offset-7 {\n        margin-left: 58.33333%; }\n      .row .col.medium-8 {\n        width: 66.66667%; }\n      .row .col.medium-offset-8 {\n        margin-left: 66.66667%; }\n      .row .col.medium-9 {\n        width: 75%; }\n      .row .col.medium-offset-9 {\n        margin-left: 75%; }\n      .row .col.medium-10 {\n        width: 83.33333%; }\n      .row .col.medium-offset-10 {\n        margin-left: 83.33333%; }\n      .row .col.medium-11 {\n        width: 91.66667%; }\n      .row .col.medium-offset-11 {\n        margin-left: 91.66667%; }\n      .row .col.medium-12 {\n        width: 100%; }\n      .row .col.medium-offset-12 {\n        margin-left: 100%; } }\n    @media (min-width: 993px) {\n      .row .col.large-1 {\n        width: 8.33333%; }\n      .row .col.large-offset-1 {\n        margin-left: 8.33333%; }\n      .row .col.large-2 {\n        width: 16.66667%; }\n      .row .col.large-offset-2 {\n        margin-left: 16.66667%; }\n      .row .col.large-3 {\n        width: 25%; }\n      .row .col.large-offset-3 {\n        margin-left: 25%; }\n      .row .col.large-4 {\n        width: 33.33333%; }\n      .row .col.large-offset-4 {\n        margin-left: 33.33333%; }\n      .row .col.large-5 {\n        width: 41.66667%; }\n      .row .col.large-offset-5 {\n        margin-left: 41.66667%; }\n      .row .col.large-6 {\n        width: 50%; }\n      .row .col.large-offset-6 {\n        margin-left: 50%; }\n      .row .col.large-7 {\n        width: 58.33333%; }\n      .row .col.large-offset-7 {\n        margin-left: 58.33333%; }\n      .row .col.large-8 {\n        width: 66.66667%; }\n      .row .col.large-offset-8 {\n        margin-left: 66.66667%; }\n      .row .col.large-9 {\n        width: 75%; }\n      .row .col.large-offset-9 {\n        margin-left: 75%; }\n      .row .col.large-10 {\n        width: 83.33333%; }\n      .row .col.large-offset-10 {\n        margin-left: 83.33333%; }\n      .row .col.large-11 {\n        width: 91.66667%; }\n      .row .col.large-offset-11 {\n        margin-left: 91.66667%; }\n      .row .col.large-12 {\n        width: 100%; }\n      .row .col.large-offset-12 {\n        margin-left: 100%; } }\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;