webpackJsonp([3,5],{

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports
	
	
	// module
	exports.push([module.id, "h1.bar {\n  color: blue;\n}", ""]);
	
	// exports


/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./bar.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./bar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 56:
/***/ function(module, exports) {

	"use strict";
	
	module.exports = ["$scope", function ($scope) {
	  "ngInject";
	
	  console.log('bar controller');
	}];

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var barController = __webpack_require__(56);
	
	__webpack_require__(17);
	
	var mod = module.exports = angular.module('bar', []);
	
	mod.controller('BarController', barController);
	
	module.exports = mod;

/***/ }

});
//# sourceMappingURL=bar-3-4366d3dbf67c53ed2299-75a0d3f571230b93257d.js.map