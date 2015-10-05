(function(){
	hxplus.controller('NewPatientController', function($stateParams, $state, 
			$translate,$http, $scope, UserRepository,PatientRepository,DoctorRepository){

			var formulario = this;

			formulario.users = UserRepository.usersPatients.query();

			formulario.patientRequest = {};
			formulario.patientRequest.history = {};

			formulario.patientRequest.history.allergies = [];
			formulario.patientRequest.history.habits = [];
			formulario.patientRequest.history.vaccines = [];

			formulario.patientRequest.doctors = [DoctorRepository.doctorUser.get({id: $stateParams.idLog})];

			//var historyRequest = this.patientRequest.history;

			//var allergy = this.allergy;

			this.addAllergy = function(allergy){
				//console.log("en addAllergy");
				//console.log(allergy);

				if (allergy != null && allergy.name != null && allergy.severity != null){
					formulario.patientRequest.history.allergies.push(allergy);
				};
				$scope.allergy = null;
				formulario.allergyForm.$setPristine();
				formulario.allergyForm.$setUntouched();
				
			};

			this.editAllergy = function(list, index){
				$scope.allergy = list[index];

				console.log("List index");
				console.log(list[index]);
				console.log("$scope.allergy:");
				console.log($scope.allergy);
				list.splice(index,1);
			};

			this.addHabit = function(habit){
				if (habit != null && habit.name != null && habit.frecuency != null){
					formulario.patientRequest.history.habits.push(habit);
				};

				$scope.habit = null;
				formulario.habitForm.$setPristine();
				formulario.habitForm.$setUntouched();
			};

			this.editHabit = function(list, index){
				$scope.habit = list[index];

				console.log("List index");
				console.log(list[index]);
				console.log("$scope.allergy:");
				console.log($scope.habit);
				list.splice(index,1);
			};

			this.addVaccine = function(vaccine){
				if(vaccine != null && vaccine.name != null && vaccine.potency != null){
					formulario.patientRequest.history.vaccines.push(vaccine);
				};

				$scope.vaccine = null;
				formulario.vaccineForm.$setPristine();
				formulario.vaccineForm.$setUntouched();
			};

			this.editVaccine = function(list, index){
				$scope.vaccine = list[index];
				list.splice(index,1);
			};



			this.delete = function(list, index){
				//console.log(allergy);
				list.splice(index,1);
			};

			this.submit = function(patientRequest){
				console.log("En Submit");
				console.log(patientRequest);

				PatientRepository.addPatient.save(
					{
						idUser:formulario.patientRequest.user.id, 
						idDoc: $stateParams.idLog
					},
					patientRequest
				).$promise.then(function(data){
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