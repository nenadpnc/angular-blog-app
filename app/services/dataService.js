(function(){
    'use strict';
    
    angular.module('blogApp').factory('dataService', dataService);
    
    function dataService(){
        return {
            getArticles: getArticles  
        };
        
        function getArticles(){
            return Data.getArticles();
        }
    }
}());