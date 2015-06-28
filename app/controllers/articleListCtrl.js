(function(){
    'use strict';
    
    angular.module('blogApp'). controller('articleListCtrl', ['$scope', 'dataService', articleListCtrl]);
    
    function articleListCtrl($scope, dataService){
        $scope.articles = dataService.getArticles();
    }
}());