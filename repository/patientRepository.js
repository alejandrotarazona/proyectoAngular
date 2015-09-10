(function(){
	hxplus.factory('PatientRepository', function($resource){
		return {
			patient: $resource('http\://localhost\:8080/occupational/patient/:id',{id: '@id'},
				{
					'update':{
						method:'PUT',
					}
				}),
			patients: $resource('http\://localhost\:8080/occupational/patient/:id/listPatients',{id: '@id'})
		};
	});
})()