(function () {
    'use strict';

    angular.module('blogApp').controller('articleAddEditCtrl', ['$scope', '$routeParams', '$location', 'dataService', articleAddEditCtrl]);

    function articleAddEditCtrl($scope, $routeParams, $location, dataService) {
        if ($routeParams.id !== "-1") {
            $scope.article = dataService.getArticleById(parseInt($routeParams.id));
        }
        $scope.images = dataService.getImages();
        $scope.tags = dataService.getTags();

        $scope.setCheckedFlag = function (article, tag) {
            return (article && article.tags && article.tags.indexOf(tag.title) > -1);
        }

        $scope.saveArticle = function () {
            if ($routeParams.id === "-1") {
                dataService.addArticle($scope.article);
            }else{
                dataService.saveArticle($scope.article);
            }
            $location.path('/');
        }
    }
}());