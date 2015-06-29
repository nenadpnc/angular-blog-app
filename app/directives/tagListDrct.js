(function () {
    angular.module('blogApp').directive('tagList', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/tagList.html',
            scope: {

            },
            controller: ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {

                $scope.tags = dataService.getTags();

                $scope.navigateTag = function (param) {
                    $location.path('/' + (param.title || 'all'));
                }

                $scope.menuClass = function (page) {
                    var current = $location.path().substring(1);
                    return (page === current || (page === 'all' && current === '')) ? "menu__item--active" : "";
                };
            }]
        }
    });
}());