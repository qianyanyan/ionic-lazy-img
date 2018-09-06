/*global define */

define(['app','config', 'mainServices', 'indexServices','moreServices','backButtonServices','chatsServices','tanpop'], 
    function (app) {
        'use strict';
        var config = require('config'),
            services = angular.module('app.services', ['app.config', 'ngResource']);
        
        services.factory('$mainServices', require('mainServices'));
        services.service('$indexServices', require('indexServices'));
        services.service('$moreServices', require('moreServices'));
        services.factory('$backButtonServices', require('backButtonServices'));
        
        //通讯录(chats页面)
        services.service('$chatsServices',require('chatsServices'));
        //弹窗实验
        //services.service('$tanpop',require('tanpop'));

    return services;
});