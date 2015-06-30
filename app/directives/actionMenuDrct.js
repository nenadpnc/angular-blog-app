(function () {
    angular.module('blogApp').directive('actionMenu', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/actionMenu.html',
            scope: {
                article: '='
            },
            controller: ['$scope', '$location', '$routeParams', 'dataService', function ($scope, $location, $routeParams, dataService) {

                $scope.menuItems = [
                    { id: 0, title: 'Back' },
                    { id: 1, title: 'Edit post' },
                    { id: 2, title: 'Add new post' },
                    { id: 3, title: 'Delete post' }
                ];
                
                $scope.action = function(item){
                    switch(item.title){
                        case 'Back':
                            $location.path('/');
                            break;
                        case 'Edit post':
                            $location.path('/edit/' + $routeParams.id);
                            break;
                        case 'Add new post':
                            $location.path('/edit/-1');
                            break;
                        case 'Delete post':
                            dataService.deleteArticle($scope.article);
                            $location.path('/');
                            break;
                    }
                };
            }]
        }
    });
}());