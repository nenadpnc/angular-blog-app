(function(){
    angular.module('blogApp').directive('singleArticle', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/singleArticle.html',
            scope: {
                article: '='
            },
            controller: ['$scope', '$location', 'animationService', function($scope, $location, animationService){
                
                animationService.init();
                
                $scope.navigateArticle = function(id){
                    $location.path('/article/' + id);
                }
            }]
        }
    });
}());