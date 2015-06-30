(function(){
    'use strict';
    
    angular.module('blogApp').factory('dataService', dataService);
    
    function dataService(){
        return {
            getArticles: getArticles,
            getTags: getTags,
            getArticleById: getArticleById,
            getImages: getImages,
            saveArticle: saveArticle,
            addArticle: addArticle,
            deleteArticle: deleteArticle
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
        
        function getImages(){
            return Data.images;
        }
        
        function saveArticle(article){
            Data.setArticle(article);
        }
        
        function addArticle(article){
            Data.createArticle(article);
        }
        
        function deleteArticle(article){
            Data.deleteArticle(article);
        }
    }
}());