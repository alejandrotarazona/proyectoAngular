(function(){
	hxplus.controller('NewPatientController', function($stateParams, $state, 
			$translate,$http, UserRepository,PatientRepository,DoctorRepository){

			this.users = UserRepository.usersPatients.query();

			this.patientRequest = {};
			this.patientRequest.history = {};
			this.patientRequest.history.allergies = [];

			this.allergy = {};
			//var historyRequest = this.patientRequest.history;

			//var allergy = this.allergy;
			


			this.addAllergy = function(main){
				console.log("en addAllergy");
				console.log(main.allergy);
				main.patientRequest.history.allergies.push(main.allergy);
				main.allergy = {};
			};

	});
})()