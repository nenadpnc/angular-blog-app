(function () {
    'use strict';

    angular.module('blogApp').controller('articleDetailsCtrl', ['$scope', '$routeParams', 'dataService', articleDetailsCtrl]);

    function articleDetailsCtrl($scope, $routeParams, dataService) {
        $scope.article = dataService.getArticleById(parseInt($routeParams.id));

        $scope.openService = function (service) {
            switch (service) {
            case 'twitter':
                window.open('http://twitter.com/share?text=' + $scope.article.title, 'twitter-share', 'width=550,height=235');
                break;
            case 'facebook':
                window.open('https://www.facebook.com/sharer/sharer.php', 'facebook-share', 'width=580,height=296');
                break;
            case 'google':
                window.open('https://plus.google.com/share', 'google-plus-share', 'width=490,height=530');
                break;
            }
        }
    }
}());