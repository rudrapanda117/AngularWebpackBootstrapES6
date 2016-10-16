import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import module from './module.js'
import './app.scss';


angular.module('app', [
	'module'
]);

angular.element(function() {
     angular.bootstrap(document, ['app']);
   });
