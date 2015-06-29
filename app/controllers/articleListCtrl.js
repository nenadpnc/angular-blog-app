(function(){
    'use strict';
    
    angular.module('blogApp'). controller('articleListCtrl', ['$scope', '$routeParams', 'dataService', articleListCtrl]);
    
    function articleListCtrl($scope, $routeParams, dataService){
        $scope.articles = dataService.getArticles($routeParams.tag);
    }
}());