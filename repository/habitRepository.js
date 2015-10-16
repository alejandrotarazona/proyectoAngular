(function(){
	hxplus.factory('HabitRepository',function($resource){
		return {
			habit : $resource('http\://localhost\:8080/occupational/habit/:idHabit/', {idHabit: '@idHabit'},
			{
				'update':{
					method:'PUT',
				}
			}),

			habitByPatient: $resource('http\://localhost\:8080/occupational/habit/bypatient/:idPatient/', {idPatient: '@idPatient'})
		}
	});
})()