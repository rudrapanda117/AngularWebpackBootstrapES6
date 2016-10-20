webpackJsonp([4,5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(5);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(4);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _oclazyloads = __webpack_require__(9);
	
	var _oclazyloads2 = _interopRequireDefault(_oclazyloads);
	
	__webpack_require__(21);
	
	__webpack_require__(6);
	
	var _ctrlTmpl = __webpack_require__(53);
	
	var _ctrlTmpl2 = _interopRequireDefault(_ctrlTmpl);
	
	__webpack_require__(16);
	
	__webpack_require__(58);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var configs = function configs($stateProvider, $urlRouterProvider, $locationProvider) {
	    $urlRouterProvider.otherwise('/');
	    //$locationProvider.html5Mode(true);
	    $stateProvider.state('home', {
	        url: '/',
	        /*template:'HomeTemplate<a ui-sref="next">Show Profile</a>'*/
	        templateUrl: 'hometemplate.html'
	    }).state('next', {
	        url: '/module1',
	        template: _ctrlTmpl2.default,
	        controller: 'AppCtrl',
	        controllerAs: 'ctrl',
	        resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
	            var deferred = $q.defer();
	
	            __webpack_require__.e/* nsure */(0, function (require) {
	                var mod = __webpack_require__(65);
	                console.log("Controller ", mod.default);
	                $ocLazyLoad.load({
	                    name: mod.default.name
	                });
	
	                deferred.resolve(mod.default.controller);
	            }); //naming chunkfiles 
	
	            return deferred.promise;
	        }]
	    }).state('nestedview', { //State demonstrating Nested views
	        url: "/nestedview",
	        templateUrl: "./module2/nestedview.html"
	    }).state('nestedview.example1', { //nested state [products is the nested state of business state]
	        url: "/example1",
	        templateUrl: "./module2/nestedviewexpl1.html",
	        controller: function controller($scope) {
	            $scope.products = ["Computer", "Printers", "Phones", "Bags"];
	        }
	    }).state('nestedview.example2', { //nested state [services is the nested state of business state]
	        url: "/example2",
	        templateUrl: "./module2/nestedviewexpl2.html",
	        controller: function controller($scope) {
	            $scope.services = ["Selling", "Support", "Delivery", "Reparation"];
	        }
	    }).state('namedview', { //State demonstrating Multiple,named views
	        url: "/namedview",
	        views: {
	            "": {
	                templateUrl: "./module2/namedview.html"
	            },
	            "view1@namedview": {
	                template: "Write whatever you want, it's your virtual company."
	            },
	            "view2@namedview": {
	                templateUrl: "./module2/namedviewexample1.html",
	                controller: function controller($scope) {
	                    $scope.clients = ["HP", "IBM", "MicroSoft"];
	                }
	            }
	        }
	    }).state('lazyload1', {
	        url: '/foo',
	        template: __webpack_require__(52),
	        controller: 'FooController',
	        resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
	            var deferred = $q.defer();
	
	            __webpack_require__.e/* nsure */(2, function (require) {
	                var mod = __webpack_require__(60);
	                console.log("mod ", mod);
	                $ocLazyLoad.load({
	                    name: mod.name
	                });
	
	                deferred.resolve(mod.controller);
	            });
	
	            return deferred.promise;
	        }]
	    }).state('lazyload2', {
	        url: '/bar',
	        template: __webpack_require__(51),
	        controller: 'BarController',
	        resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
	            var deferred = $q.defer();
	
	            __webpack_require__.e/* nsure */(3, function (require) {
	                var mod = __webpack_require__(57);
	                $ocLazyLoad.load({
	                    name: mod.name
	                });
	
	                deferred.resolve(mod.controller);
	            });
	
	            return deferred.promise;
	        }]
	    });
	};
	//import module1 from './module1/module.js'
	
	
	configs.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	
	//angular.module('app', [uirouter, module1, oclazyload])
	_angular2.default.module('app', [_angularUiRouter2.default, _oclazyloads2.default]).config(configs);
	
	_angular2.default.element(function () {
	    _angular2.default.bootstrap(document, ['app']);
	});

/***/ },

/***/ 1:
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

/***/ 3:
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


/***/ },

/***/ 16:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 18:
16,

/***/ 21:
16,

/***/ 51:
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"#\">Angular Webpack ES6 Bootstrap</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li class=\"active\"><a ui-sref=\"home\">Home</a></li>\r\n            <li><a ui-sref=\"next\">ES6 Angular Example</a></li>\r\n            <li><a ui-sref=\"nestedview\">UI Router Nested View Example</a></li>\r\n            <li><a ui-sref=\"namedview\">UI Router Named View Example</a></li>\r\n            <li><a ui-sref=\"lazyload1\">With OclazyLoading</a></li>\r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      </div>\r\n    </nav>\r\n\r\n<h1 class='bar'>lazyload2 state</h1>\r\n\r\n<a ui-sref='lazyload1'>Go to lazyload1 state</a>\r\n";

/***/ },

/***/ 52:
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"#\">Angular Webpack ES6 Bootstrap</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li class=\"active\"><a ui-sref=\"home\">Home</a></li>\r\n            <li><a ui-sref=\"next\">ES6 Angular Example</a></li>\r\n            <li><a ui-sref=\"nestedview\">UI Router Nested View Example</a></li>\r\n            <li><a ui-sref=\"namedview\">UI Router Named View Example</a></li>\r\n            <li><a ui-sref=\"lazyload1\">With OclazyLoading</a></li>\r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      </div>\r\n    </nav>\r\n\r\n<h1 class='foo'>Lazyload1 state</h1>\r\n\r\n\r\n<a ui-sref='lazyload2'>Go to Lazyload2 state</a>\r\n";

/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"#\">Angular Webpack ES6 Bootstrap</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li class=\"active\"><a ui-sref=\"home\">Home</a></li>\r\n            <li><a ui-sref=\"next\">ES6 Angular Example</a></li>\r\n            <li><a ui-sref=\"nestedview\">UI Router Nested View Example</a></li>\r\n            <li><a ui-sref=\"namedview\">UI Router Named View Example</a></li>\r\n            <li><a ui-sref=\"lazyload1\">With OclazyLoading</a></li>\r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      </div>\r\n    </nav>\r\n\r\n\r\n<div class=\"container\">\r\n    <div>\r\n        <h4>{{ctrl.controllerName}}</h4></div>\r\n    <div>\r\n        <button ng-click=\"ctrl.fetchData()\" class=\"btn btn-default\">Fetch Data</button>\r\n        <div>\r\n            <h4>Message is :{{ctrl.message}}</h4></div>\r\n        <app></app>\r\n        <h1>Modal example</h1>\r\n        <button ng-click=\"ctrl.toggleModal()\" class=\"btn btn-default\">Open modal</button>\r\n\r\n        <modal title=\"Login form\" visible=\"ctrl.showModal\">\r\n            <form role=\"form\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">Email address</label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" />\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n            </form>\r\n        </modal>\r\n    </div>\r\n</div>\r\n";

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(18);
	
	module.exports = {};

/***/ }

});
//# sourceMappingURL=app.js.map