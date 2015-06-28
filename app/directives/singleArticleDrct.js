(function(){
    angular.module('blogApp').directive('singleArticle', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/singleArticle.html',
            scope: {
                article: '='
            },
            controller: ['$scope', function($scope){
                $scope.openService = function(service){
                    switch(service){
                        case 'twitter':
                            window.open('http://twitter.com/share?text=' + $scope.article.title, 'twitter-share', 'width=550,height=235');
                            break;
                        case 'facebook':
                            window.open('https://www.facebook.com/sharer/sharer.php', 'facebook-share','width=580,height=296');
                            break;
                        case 'google':
                            window.open('https://plus.google.com/share', 'google-plus-share', 'width=490,height=530');
                            break;
                    }
                }
            }]
        }
    });
}());