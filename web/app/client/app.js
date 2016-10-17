import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import module1 from './module1/module.js'
import template1 from './module1/ctrlTmpl.html';
import './app.scss';




var configs = function($routeProvider) {
    $routeProvider
        .when('/', {
            template: template1,
            controller: 'AppCtrl',
						controllerAs:'ctrl'
        });
}

configs.$inject = ['$routeProvider'];

angular.module('app', [
        module1
    ])
    .config(configs);

angular.element(function() {
    angular.bootstrap(document, ['app']);
});
