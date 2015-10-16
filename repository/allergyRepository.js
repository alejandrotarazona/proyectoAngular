(function(){
	hxplus.factory('AllergyRepository',function($resource){
		return {
			allergy : $resource('http\://localhost\:8080/occupational/allergy/:idAllergy/', {idAllergy: '@idAllergy'},
			{
				'update':{
					method:'PUT',
				}
			}),

			allergyByPatient: $resource('http\://localhost\:8080/occupational/allergy/bypatient/:idPatient/', {idPatient: '@idPatient'})
		}
	});
})()