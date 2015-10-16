(function(){
	hxplus.controller('VaccinePopupController', function($state,$stateParams,$translate,$http,$scope,
		VaccineRepository){

		global = this;

		VaccineRepository.vaccineByPatient.query({idPatient:$stateParams.idPatient}).$promise.then(function(data){
			global.vaccines = data;
			//console.log(data);
		});
	});
})()