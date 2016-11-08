webpackJsonp([2,5],{

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, "h1.foo {\n  color: red; }\n", ""]);

	// exports


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./foo.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./foo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 65:
/***/ function(module, exports) {

	'use strict';

	/*@ngInject*/
	foocontroller.$inject = ["$scope"];
	function foocontroller($scope) {
	  console.log('foo controller');
	}
	module.exports = foocontroller;

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fooController = __webpack_require__(65);

	__webpack_require__(24);

	var mod = angular.module('foo', []);

	mod.controller('FooController', ['$scope', fooController]);

	module.exports = mod;

/***/ }

});