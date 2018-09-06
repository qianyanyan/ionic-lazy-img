/*global define, require */
//'memberCtrl', 'cartCtrl', 'mapCtrl', 
define(['app', 'mainCtrl', 'indexCtrl', 'moreCtrl','chatsCtrl','chatsdetailCtrl', 'services'], function(app){
    'use strict';
    var controllers = angular.module('app.controllers', ['app.services', 'app.config','ionicLazyLoad','ionic-img-lazy-load']);

    controllers.controller('mainCtrl', require('mainCtrl'));
    controllers.controller('indexCtrl', require('indexCtrl'));
    controllers.controller('moreCtrl', require('moreCtrl'));
    
    controllers.controller('chatsCtrl', require('chatsCtrl'));
    controllers.controller('chatsdetailCtrl', require('chatsdetailCtrl'));

    return controllers;

});
