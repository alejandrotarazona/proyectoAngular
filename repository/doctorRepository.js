(function(){
	hxplus.factory('DoctorRepository', function($resource){
		return {
			doctor: $resource('http\://localhost\:8080/occupational/doctor/:id',{id: '@id'},
				{
					'update':{
						method:'PUT',
					}
				}),

			doctorEager: $resource('http\://localhost\:8080/occupational/doctor/:id/dashboard',{id: '@id'})
		};
	});
})()