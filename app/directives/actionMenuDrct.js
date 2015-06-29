(function () {
    angular.module('blogApp').directive('actionMenu', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/actionMenu.html',
            scope: {

            },
            controller: ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {

                $scope.menuList = [
                    { id: 0, title: 'Back' },
                    { id: 0, title: 'Edit post' },
                    { id: 0, title: 'Add new post' },
                    { id: 0, title: 'Delete post' }
                ];
                
                $scope.action = function(item){
                    
                };
            }]
        }
    });
}());