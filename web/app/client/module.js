import angular from 'angular';
import ngRoute from 'angular-route';
import controller from './controller.js';
import template from './ctrlTmpl.html';
import directive from './directive.js'
import modalDirective from './modalDirective.js';

const moduleName = 'module';

var configs=function($routeProvider){
  $routeProvider
      .when('/', {
          template: template,
          controller: 'AppCtrl as ctrl'
      });
}

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


angular.module(moduleName, [ngRoute])
    .directive('app', ()=>new directive)
    .directive('modal', modalDirective)
    .controller('AppCtrl', controller)
    .config(configs);







export default moduleName;
