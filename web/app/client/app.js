import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import module1 from './module1/module.js'
import template1 from './module1/ctrlTmpl.html';
import './app.scss';






var configs = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            /*template:'HomeTemplate<a ui-sref="next">Show Profile</a>'*/
            templateUrl: 'hometemplate.html'
        }).state('next', {
            url: '/module1',
            template: template1,
            controller: 'AppCtrl',
            controllerAs: 'ctrl'
        }).state('nestedview', { //State demonstrating Nested views
            url: "/nestedview",
            templateUrl: "./module2/nestedview.html"
        })
        .state('nestedview.example1', { //nested state [products is the nested state of business state]
            url: "/example1",
            templateUrl: "./module2/nestedviewexpl1.html",
            controller: function($scope) {
                $scope.products = ["Computer", "Printers", "Phones", "Bags"];
            }
        })
        .state('nestedview.example2', { //nested state [services is the nested state of business state]
            url: "/example2",
            templateUrl: "./module2/nestedviewexpl2.html",
            controller: function($scope) {
                $scope.services = ["Selling", "Support", "Delivery", "Reparation"];
            }
        })
        .state('namedview', { //State demonstrating Multiple,named views
            url: "/namedview",
            views: {
                "": {
                    templateUrl: "./module2/namedview.html"
                },
                "view1@namedview": {
                    template: "Write whatever you want, it's your virtual company."
                },
                "view2@namedview": {
                    templateUrl: "./module2/namedviewexample1.html",
                    controller: function($scope) {
                        $scope.clients = ["HP", "IBM", "MicroSoft"];
                    }
                }
            }
        });
}

configs.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('app', [uirouter, module1])
    .config(configs);

angular.element(function() {
    angular.bootstrap(document, ['app']);
});
