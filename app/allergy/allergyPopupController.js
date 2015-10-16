(function(){
	hxplus.controller('AllergyPopupController', function($state,$stateParams,$translate,$http,$scope,
		AllergyRepository){

		global = this;

		AllergyRepository.allergyByPatient.query({idPatient:$stateParams.idPatient}).$promise.then(function(data){
			global.allergies = data;
			//console.log(data);
		});
	});
})()