(function(){
    'use strict';
    
    var app = angular.module('blogApp', ['ngRoute']);
        
    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
            templateUrl: 'app/controllers/articleList.html',
            controller: 'articleListCtrl'
        })
        .otherwise({ redirectTo: '/' });
    });
}());