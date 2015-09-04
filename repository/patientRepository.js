(function(){
	hxplus.factory('PatientRepository', function($resource){
		return {
			patient: $resource('http\://localhost\:8080/occupational/patient/:id',{id: '@id'},
				{
					'update':{
						method:'PUT',
					}
				})
		};
	});
})()