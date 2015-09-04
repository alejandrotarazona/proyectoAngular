(function(){
	hxplus.controller('DoctorAddPatientController', function($stateParams, $state, $mdDialog, 
			$translate,$http, UserRepository,PatientRepository,DoctorRepository){

		this.doctor = DoctorRepository.doctor.get({id:$stateParams.idDoc});
		this.listPatients = PatientRepository.user.query();
		this.newpatient = {};

		this.firstConsult = function(){
			
		};

		this.submit = function(patientRequest){
			PatientRepository.save(patientRequest).$promise.then(function(data){
					//Pop-up de creación exitosa...
					$state.transitionTo('home.doctor',{},
						{
							inherit:true,
							reload:true,
						}
					);
				});
		};

	});
})()