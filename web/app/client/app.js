import angular from 'angular';
import uirouter from 'angular-ui-router';
import oclazyload from 'oclazyload';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import module1 from './module1/module.js'
import template1 from './module1/ctrlTmpl.html';
import './app.scss';
import './core';





var configs = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/',
            /*template:'HomeTemplate<a ui-sref="next">Show Profile</a>'*/
            templateUrl: 'hometemplate.html'
        }).state('next', {
            url: '/module1',
            template: template1,
            controller: 'AppCtrl',
            controllerAs: 'ctrl',/*
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('./module1/module.js');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]*/
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
        })
        .state('lazyload1', {
            url: '/foo',
            template: require('./foo/foo.html'),
            controller: 'FooController',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('./foo');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        })
        .state('lazyload2', {
            url: '/bar',
            template: require('./bar/bar.html'),
            controller: 'BarController',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('./bar');
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                });

                return deferred.promise;
            }]
        });
}

configs.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

angular.module('app', [uirouter, module1, oclazyload])
//angular.module('app', [uirouter, oclazyload])
    .config(configs);

angular.element(function() {
    angular.bootstrap(document, ['app']);
});
