(function(){
	hxplus.controller('PatientController', function($state,$stateParams,$translate,$http, $scope, PatientRepository, CostCenterRepository){
		var ctrl = this;

		ctrl.patient = PatientRepository.patient.get({idUser:$stateParams.idPatient});
		ctrl.patient.works = CostCenterRepository.costCenterUser.get({idUser:ctrl.patient.user.id});

	});
})()