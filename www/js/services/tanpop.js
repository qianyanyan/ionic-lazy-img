
define(['ionic'],function(angular){
   	var tanpop = {
   		open :function(s,$ionicModal,fun){//console.log(fun)
   			
   			$ionicModal.fromTemplateUrl('./templates/chats/tanpop.html',{
		            scope: s,
		            animation: 'slide-in-up'
		        }).then(function(modal){
		            s.modal=modal;
		            s.modal.show();
		        });
		    s.tanpop_close = function(){
		    	s.modal.hide();
		    }
		    //console.log(fun)
		    //详情页面的弹窗数据
		    s.data=fun;
   		}
   	}
   
    return tanpop;
});