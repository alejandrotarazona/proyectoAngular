(function(){
	hxplus.factory('PatientRepository', function($resource){
		return {
			patient: $resource('http\://localhost\:8080/occupational/patient/:idUser/',{idUser: '@idUser'},
				{
					'update':{
						method:'PUT',
					}
				}),
			patients: $resource('http\://localhost\:8080/occupational/patient/:id/listPatients',{id: '@id'}),
			
			addPatient: $resource('http\://localhost\:8080/occupational/patient/:idUser/doctor/:idDoc',{idUser: '@idUser', idDoc: '@idDoc'},
				{
					'update':{
						method:'PUT',
					}
				}),
		};
	});
})()