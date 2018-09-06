define(function(){
    'use strict'
    var service = function($http){
        return {
            get:function(callback){
            	$http.get('../../json/index.json').success(function(data){//本地地址
                   return callback(data);
                });
            }
        }
    };
    service.$inject = ['$http'];
    return service;
});