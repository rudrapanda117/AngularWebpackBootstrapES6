import angular from 'angular';
import ngRoute from 'angular-route';
import controller from './controller.js';
import directive from './directive.js'
import modalDirective from './modalDirective.js';

const moduleName = 'module1';




angular.module(moduleName, [ngRoute])
    .directive('app', ()=>new directive)
    .directive('modal', modalDirective)
    .controller('AppCtrl', controller)








export default moduleName;
