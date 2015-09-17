(function(){
	hxplus.controller('NewPatientController', function($stateParams, $state, 
			$translate,$http, UserRepository,PatientRepository,DoctorRepository){
			this.users = UserRepository.usersPatients.query();
			
			var historyRequest = {};

			historyRequest.allergies = [];
			historyRequest.vaccines = [];
			historyRequest.habits = [];

			this.allergy = [];
			this.vaccine = [];
			this.habit = [];

			this.addAllergy = function(historyRequest){
				historyRequest.allergies.push(this.allergy);
				this.allergy = [];
			};

			this.addVaccine = function(historyRequest){
				historyRequest.vaccines.push(this.vaccine);
				this.vaccine = [];
			};

			this.addHabit = function(historyRequest){
				historyRequest.habits.push(this.habit);
				this.habit = {};
			};
	});
})()