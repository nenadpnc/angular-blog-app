(function(){
    'use strict';
    
    angular.module('blogApp').factory('dataService', dataService);
    
    function dataService(){
        return {
            getArticles: getArticles,
            getTags: getTags,
            getArticleById: getArticleById
        };
        
        function getArticles(tag){
            return Data.getArticles(tag);
        }
        
        function getTags(){
            return Data.tags;
        }
        
        function getArticleById(id){
            return Data.getArticleById(id);
        }
    }
}());