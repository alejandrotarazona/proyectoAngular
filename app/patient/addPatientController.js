(function(){
	hxplus.controller('AddPatientController', function($stateParams, $state, 
			$translate,$http, UserRepository,PatientRepository,DoctorRepository){

		this.doctor = DoctorRepository.doctor.get({id:$stateParams.idLogged});
		this.listPatients = PatientRepository.patient.query();

		var doc = this.doctor;

		//console.log(this.listPatients);

		this.submit = function(idpatient,iddoctor){
			DoctorRepository.doctorAddPatient.save({idDoctor: iddoctor, idPatient: idpatient}).$promise.then(function(data){
				//$state.go('home.doctor',{idDoc: home.user.id});
				//$state.go('home.doctor',{});
				$state.transitionTo('home.doctor',{},
						{
							inherit:true,
							reload:true,
						}
				);
			});
			
		};

		this.newPatient = function(){
			$state.go('home.newPatient',{},
			{
				inherit:true,
			})
		};

	});
})()