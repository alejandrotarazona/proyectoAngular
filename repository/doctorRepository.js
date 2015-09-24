(function(){
	hxplus.factory('DoctorRepository', function($resource){
		return {
			doctor: $resource('http\://localhost\:8080/occupational/doctor/:id',{id: '@id'},
				{
					'update':{
						method:'PUT',
					}
				}),

			doctorAddPatient: $resource('http\://localhost\:8080/occupational/doctor/:id/patient/:idPatient',{id: '@id', idPatient:'@idPatient'},
				{
					'update':{
						method:'PUT',
					}
				}),

			doctorUser: $resource('http\://localhost\:8080/occupational/doctor/user/:id' , {id: '@id'}),
			//doctorEager: $resource('http\://localhost\:8080/occupational/doctor/:id/listPatients',{id: '@id'})
		};
	});
})()