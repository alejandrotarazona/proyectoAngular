(function(){
	hxplus.controller('BackgroundPopupController', function($state,$stateParams,$translate,$http,$scope,
		BackgroundRepository){

		global = this;

		BackgroundRepository.backgroundByPatient.query({idPatient:$stateParams.idPatient}).$promise.then(function(data){
			global.backgrounds = data;
			//console.log(data);
		});
	});
})()