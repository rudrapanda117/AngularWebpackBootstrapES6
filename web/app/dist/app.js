webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(3);
	
	__webpack_require__(12);
	
	var _module2 = __webpack_require__(14);
	
	var _module3 = _interopRequireDefault(_module2);
	
	__webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_angular2.default.module('app', ['module']);
	
	_angular2.default.element(function () {
	  _angular2.default.bootstrap(document, ['app']);
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularRoute = __webpack_require__(15);
	
	var _angularRoute2 = _interopRequireDefault(_angularRoute);
	
	var _controller = __webpack_require__(17);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _ctrlTmpl = __webpack_require__(18);
	
	var _ctrlTmpl2 = _interopRequireDefault(_ctrlTmpl);
	
	var _directive = __webpack_require__(19);
	
	var _directive2 = _interopRequireDefault(_directive);
	
	var _modalDirective = __webpack_require__(24);
	
	var _modalDirective2 = _interopRequireDefault(_modalDirective);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleName = 'module';
	
	var configs = function configs($routeProvider) {
	    $routeProvider.when('/', {
	        template: _ctrlTmpl2.default,
	        controller: 'AppCtrl as ctrl'
	    });
	};
	
	/*
	class configs {
	 static $inject = ['$routeProvider'];
	    constructor($routeProvider) {
	
	        console.log('inside');
	        $routeProvider
	            .when('/', {
	                template: template,
	                controller: 'AppCtrl as ctrl'
	            });
	    }
	}
	*/
	
	configs.$inject = ['$routeProvider'];
	
	_angular2.default.module(moduleName, [_angularRoute2.default]).directive('app', function () {
	    return new _directive2.default();
	}).directive('modal', _modalDirective2.default).controller('AppCtrl', _controller2.default).config(configs);
	
	exports.default = moduleName;

/***/ },
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ExampleController = function ExampleController() {
	    var _this = this;
	
	    _classCallCheck(this, ExampleController);
	
	    this.toggleModal = function () {
	        console.log("Clicked");
	        _this.showModal = !_this.showModal;
	    };
	
	    this.controllerName = 'First Controller';
	    this.showModal = false;
	};
	
	exports.default = ExampleController;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <div>\n        <div>{{ctrl.controllerName}}</div>\n        <app></app>\n        <h1>Modal example</h1>\n        <button ng-click=\"ctrl.toggleModal()\" class=\"btn btn-default\">Open modal</button>\n\n        <modal title=\"Login form\" visible=\"ctrl.showModal\">\n            <form role=\"form\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Email address</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" />\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" />\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n            </form>\n        </modal>\n    </div>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ExampleDirective = function ExampleDirective($filter) {
	    _classCallCheck(this, ExampleDirective);
	
	    console.log("filter", $filter);
	    this.template = __webpack_require__(22);
	    this.restrict = 'E';
	    this.scope = {};
	
	    this.controller = ExampleDirectiveController;
	    this.controllerAs = 'dire';
	    this.bindToController = true;
	};
	//ExampleDirective.$inject = ['$filter'];
	
	exports.default = ExampleDirective;
	
	var ExampleDirectiveController = function ExampleDirectiveController($filter) {
	    _classCallCheck(this, ExampleDirectiveController);
	
	    console.log('$filter1' + $filter);
	    this.url = 'https://github.com/preboot/angular-webpack';
	    this.samplename = 'Directive Controller';
	};
	
	/*
	function ExampleDirectiveController($filter) {
	console.log('$filter'+$filter);
	    this.samplename = 'rudra';
	    this.url = 'https://github.com/preboot/angular-webpack';
	
	};
	*/
	
	
	ExampleDirectiveController.$inject = ['$filter'];
	
	/*
	class ExampleDirectiveController {
	    constructor($filter) {
	            this.url = 'https://github.com/preboot/angular-webpack';
	            this.sortingOrder = 'name';
	            this.pageSizes = [5, 10, 25, 50];
	            this.reverse = false;
	            this.filteredItems = [];
	            this.groupedItems = [];
	            this.itemsPerPage = 10;
	            this.pagedItems = [];
	            this.currentPage = 0;
	            this.items = this.generateData();
	            this.search();
	        }
	        // init
	    generateData = () => {
	        var arr = [];
	        var letterWords = ["alpha", "bravo", "charlie", "daniel", "earl", "fish", "grace", "henry", "ian", "jack", "karen", "mike", "delta", "alex", "larry", "bob", "zelda"]
	        for (var i = 1; i < 60; i++) {
	            var id = letterWords[Math.floor(Math.random() * letterWords.length)];
	            arr.push({
	                "id": id + i,
	                "name": "name " + i,
	                "description": "Description of item #" + i,
	                "field3": id,
	                "field4": "Some stuff about rec: " + i,
	                "field5": "field" + i
	            });
	        }
	        return arr;
	    }

	    searchMatch = (haystack, needle) => {
	        if (!needle) {
	            return true;
	        }
	        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
	    };

	    // init the filtered items
	    search = () => {
	        this.filteredItems = $filter('filter')(this.items, function(item) {
	            for (var attr in item) {
	                if (this.searchMatch(item[attr], this.query))
	                    return true;
	            }
	            return false;
	        });
	        // take care of the sorting order
	        if (this.sortingOrder !== '') {
	            this.filteredItems = $filter('orderBy')(this.filteredItems, this.sortingOrder, this.reverse);
	        }
	        this.currentPage = 0;
	        // now group by pages
	        this.groupToPages();
	    };

	    // show items per page
	    perPage = () => {
	        this.groupToPages();
	    };

	    // calculate page in place
	    groupToPages = () => {
	        this.pagedItems = [];

	        for (var i = 0; i < this.filteredItems.length; i++) {
	            if (i % this.itemsPerPage === 0) {
	                this.pagedItems[Math.floor(i / this.itemsPerPage)] = [this.filteredItems[i]];
	            } else {
	                this.pagedItems[Math.floor(i / this.itemsPerPage)].push(this.filteredItems[i]);
	            }
	        }
	    };

	    deleteItem = (idx) => {
	        var itemToDelete = this.pagedItems[this.currentPage][idx];
	        var idxInItems = this.items.indexOf(itemToDelete);
	        this.items.splice(idxInItems, 1);
	        this.search();

	        return false;
	    };

	    range = (start, end) => {
	        var ret = [];
	        if (!end) {
	            end = start;
	            start = 0;
	        }
	        for (var i = start; i < end; i++) {
	            ret.push(i);
	        }
	        return ret;
	    };

	    prevPage = () => {
	        if (this.currentPage > 0) {
	            this.currentPage--;
	        }
	    };

	    nextPage = () => {
	        if (this.currentPage < this.pagedItems.length - 1) {
	            this.currentPage++;
	        }
	    };

	    setPage = () => {
	        this.currentPage = this.n;
	    };

	    // functions have been describe process the data for display



	    // change sorting order
	    sort_by = (newSortingOrder) => {
	        if (this.sortingOrder == newSortingOrder)
	            this.reverse = !this.reverse;

	        this.sortingOrder = newSortingOrder;
	    };

	};

	ExampleDirectiveController.$inject = ['$filter'];
	*/

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div >\n  <h1 class=\"star\">Hello from Angular !</h1>\n\n  <!-- Images (and assets) are parsed and loaded from within the public directory -->\n  <img src=\"" + __webpack_require__(23) + "\">\n\n  <hr>\n  {{dire.samplename}}\n</br>\n\n\n  <a ng-href=\"{{dire.url}}\">Webpack Angular Starter</a>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/img/logo.png";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    return {
	        template: _modalDirective2.default,
	        restrict: 'E',
	        transclude: true,
	        replace: true,
	        scope: true,
	        controller: ModalDirectiveController,
	        controllerAs: 'mod',
	        bindToController: true,
	        link: function postLink(scope, element, attrs) {
	            scope.title = attrs.title;
	
	            scope.$watch(attrs.visible, function (value) {
	                if (value == true) $(element).modal('show');else $(element).modal('hide');
	            });
	
	            $(element).on('shown.bs.modal', function () {
	                scope.$apply(function () {
	                    scope.$parent[attrs.visible] = true;
	                });
	            });
	
	            $(element).on('hidden.bs.modal', function () {
	                scope.$apply(function () {
	                    scope.$parent[attrs.visible] = false;
	                });
	            });
	        }
	    };
	};
	
	var _modalDirective = __webpack_require__(25);
	
	var _modalDirective2 = _interopRequireDefault(_modalDirective);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ModalDirectiveController = function ModalDirectiveController() {
	    _classCallCheck(this, ModalDirectiveController);
	
	    this.headLine = "Please fill in to login";
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal fade\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">{{ title }}</h4>\n          <h4 class=\"modal-title\">{{ mod.headLine }}</h4>\n        </div>\n        <div class=\"modal-body\" ng-transclude></div>\n      </div>\n    </div>\n  </div>\n";

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.js.map