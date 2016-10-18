import angular from 'angular';
import controller from './controller.js';
import directive from './directive.js'
import modalDirective from './modalDirective.js';

const moduleName = 'module1';



//export default =
angular.module(moduleName,[])
    .directive('app', ()=>new directive)
    .directive('modal', modalDirective)
    .controller('AppCtrl', controller)








export default moduleName;
