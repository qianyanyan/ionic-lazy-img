/*global define, require */

define(['angular',
        'ionic',
        'img_lazy_load',
        'lazy_load',
        'uiRouter',
        //'ionicAngular',
        'services',
        'controllers'
        ],

    function (angular,ionic ,uiRouter) {
        'use strict';
        var app = angular.module('app', [
            'ionic',
            'ionicLazyLoad',
            'ionic-img-lazy-load',
            'app.controllers',
            'app.services',
            'ui.router'
        ]);
    return app;
});