var barController = require('./bar.controller.js');

require('./bar.scss');

var mod = module.exports = angular.module('bar', []);

mod.controller('BarController', barController);

module.exports = mod;
