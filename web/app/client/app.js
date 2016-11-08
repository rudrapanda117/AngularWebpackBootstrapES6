import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrapCSS';
import 'bootstrapJS';
import oclazyload from 'oclazyloads';

//import module1 from './module1/module.js'
import template1 from './module1/ctrlTmpl.html';
//import variables from '!!sass-variables!./variable.scss';
//import variables from './variable.scss';
import style from './app.scss';
import './core';
import "angular-touch";
import "angular-animate";
import  'angular-ui-grid/ui-grid.css';
import 'angular-ui-grid/ui-grid.js';

//console.log(variables);

console.log(angular.element);


var configs = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/',
            /*template:'HomeTemplate<a ui-sref="next">Show Profile</a>'*/
            templateUrl: 'hometemplate.html'
        }).state('next', {
            url: '/module1',
            template: template1,
            controller: 'AppCtrl',
            controllerAs: 'ctrl',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure([], function(require) {
                    var mod = require('./module1/module.js');
                    console.log("Controller ",mod.default);
                    $ocLazyLoad.load({
                        name: mod.default.name,
                    });

                    deferred.resolve(mod.default.controller);
                },'module1');//naming chunkfiles

                return deferred.promise;
            }]
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
                    console.log("mod ",mod);
                    $ocLazyLoad.load({
                        name: mod.name,
                    });

                    deferred.resolve(mod.controller);
                },'foo');

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
                },'bar');

                return deferred.promise;
            }]
        });
}

configs.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

//angular.module('app', [uirouter, module1, oclazyload])
angular.module('app', [uirouter, oclazyload])
    .config(configs);

angular.element(function() {
    angular.bootstrap(document, ['app']);
});
