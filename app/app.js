(function () {
    'use strict';

    var app = angular.module('blogApp', ['ngRoute', 'ngSanitize']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/controllers/articleList.html',
                controller: 'articleListCtrl'
            })
            .when('/:tag', {
                templateUrl: 'app/controllers/articleList.html',
                controller: 'articleListCtrl'
            })
            .when('/article/:id', {
                templateUrl: 'app/controllers/articleDetails.html',
                controller: 'articleDetailsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}());