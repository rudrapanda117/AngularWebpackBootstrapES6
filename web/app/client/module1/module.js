import controller from './controller.js';
import directive from './directive.js'
import modalDirective from './modalDirective.js';

const moduleName = 'module1';

var mod = angular.module(moduleName,[]);


mod.directive('app', ()=>new directive)
    .directive('modal', modalDirective)
    .controller('AppCtrl', controller);

export default mod;






/*export default moduleName;*/
