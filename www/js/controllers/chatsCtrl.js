define(function () {
    'use strict';
    function ctrl($scope, $mainServices,$chatsServices) {
        $mainServices.showLoading();
        $chatsServices.get(function(data){
        	angular.forEach(data.data.item,function(i){//console.log(i)
        		i.chatdata=encodeURIComponent(encodeURIComponent(JSON.stringify(i)))
        	})
            $scope.chats = data.data.item;console.log($scope.chats)
        });
    
        $mainServices.hideLoding();
    }

    ctrl.$inject = ['$scope', '$mainServices','$chatsServices'];
    return ctrl;
    
});