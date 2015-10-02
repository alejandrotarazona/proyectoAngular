(function(){
	hxplus.controller('PatientController', function($state,$stateParams,$translate,$http, $scope, PatientRepository, CostCenterRepository, PostRepository){

		var global = this;

		PatientRepository.patient.get({idUser:$stateParams.idPatient}).$promise.then(function(data){
			global.patient = data;

			console.log("Dentro del promise");

			console.log("Data");
			console.log(data);

			console.log("User (?):");
			console.log(data.user);

			global.works = CostCenterRepository.costCenterUser.get({idUser:data.user.id});
			global.post = PostRepository.postUser.get({idUser:data.user.id});
			
		});	
	});
})()