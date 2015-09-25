(function(){
	hxplus.controller('PatientController', function($state,$stateParams,$translate,$http, $scope, PatientRepository){
		this.patient = PatientRepository.patient.get({idUser:$stateParams.idPatient});
	});
})()