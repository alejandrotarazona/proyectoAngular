(function(){
	hxplus.controller('HabitPopupController', function($state,$stateParams,$translate,$http,$scope,
		HabitRepository){

		global = this;

		HabitRepository.habitByPatient.query({idPatient:$stateParams.idPatient}).$promise.then(function(data){
			global.habits = data;
			//console.log(data);
		});
	});
})()