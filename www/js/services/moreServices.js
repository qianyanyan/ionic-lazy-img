define(function(){
    'use strict'
    var service = function($http){
        return {
            get:function(callback){
                $http.get('json/more.json').success(function(data){//console.log(data)
                   return callback(data);
                });
            }
        }
    };
    service.$inject = ['$http'];
    return service;
});