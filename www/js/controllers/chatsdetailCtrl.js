define(['tanpop'],function (tanpop) {
    'use strict';
    function ctrl($scope, $mainServices,$stateParams,$ionicModal) {
    	$scope.chat = JSON.parse(decodeURIComponent(decodeURIComponent($stateParams.chatdata)));
        //$scope.chat = JSON.parse($stateParams.chat);console.log(typeof $scope.chat)
        //console.log($stateParams.chatdata);
        $scope.tanpop = function(data){
    		tanpop.open($scope,$ionicModal,data);
    	}
    }

    ctrl.$inject = ['$scope', '$mainServices','$stateParams','$ionicModal'];
    return ctrl;
    
});