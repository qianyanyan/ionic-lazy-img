/*global requirejs, document, cordova, window, navigator, console */

require.config({
    paths:{
        fastclick:'../lib/fastclick',
        async:'../lib/async',
        domReady:'../lib/domReady',
        
        angular:'../lib/ionic/js/angular/angular',
        angularAnimate:'../lib/ionic/js/angular/angular-animate',
        angularSanitize:'../lib/ionic/js/angular/angular-sanitize',
        uiRouter:'../lib/ionic/js/angular-ui/angular-ui-router',
        ngResource:'../lib/ionic/js/angular/angular-resource',


        ionic:'../lib/ionic/js/ionic.bundle.min',
        ionicAngular:'../lib/ionic/js/ionic-angular',
        
        app:'app',
        config:'config',

        services:'services/services',
        mainServices:'services/mainServices',
        indexServices:'services/indexServices',
        moreServices:'services/moreServices',
        backButtonServices:'services/backButtonServices',
        chatsServices:'services/chatsServices',

        tanpop:'services/tanpop',
        img_lazy_load:'ionic-image-lazy-load',//ionic 图片
        lazy_load:'lazy-load',//ionic 图片懒加载

		chatsCtrl:'controllers/chatsCtrl',
		chatsdetailCtrl:'controllers/chatsdetailCtrl',
        mainCtrl:'controllers/mainCtrl',
        indexCtrl:'controllers/indexCtrl',
        sortCtrl:'controllers/sortCtrl',
        moreCtrl:'controllers/moreCtrl',
        controllers:'controllers/controllers',

        directives:'directives/directives',
        mainDirective:'directives/mainDirective',
    },
    waitSeconds: 40,
    shim:{
        img_lazy_load:{deps:['ionic']},//该模块的依赖性
        lazy_load:{deps:['ionic']},//lazy-load.js用
        angular : {exports : 'angular'},
        app : {exports : 'app'},
        angularAnimate : {deps: ['angular']},
        angularSanitize : {deps: ['angular']},
        uiRouter : {deps: ['angular']},
        ngResource: {deps: ['angular']},
        ionic :  {deps: ['angular'], exports : 'ionic'},
        ionicAngular: {deps: ['angular', 'ionic','uiRouter', 
                              'angularAnimate', 'angularSanitize',
                              'ngResource'],exports: 'ionicAngular'}                      
    },
    priority:['angular','ionic'],
    deps:['bootstrap']
});
