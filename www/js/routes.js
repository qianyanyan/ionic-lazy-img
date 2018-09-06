/*global define, require */

define(['app'], function(app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
            // setup an abstract state for the tabs directive
                .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            // Each tab has its own nav history stack:
            .state('tab.index', {
                url: '/index',
                views: {
                    'tab-index': {
                        templateUrl: 'templates/site/index.html',
                        controller: 'indexCtrl'
                    }
                }
            })
            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chats/index.html',
                        controller: 'chatsCtrl'
                    }
                }
            })
            .state('tab.detail', {
                url: '/chats/:chatdata',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chats/detail.html',
                        controller: 'chatsdetailCtrl'
                    }
                }
            })
            .state('tab.more', {
                url: '/more',
                views: {
                    'tab-more': {
                        templateUrl: 'templates/etc/more.html',
                        controller: 'moreCtrl'
                    }
                }
            })
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/index');
    }]);
});
