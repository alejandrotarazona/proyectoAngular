(function(){
	hxplus.factory('VitalSignRepository', function($resource){
		return {
			vitalSign: $resource('http\://localhost\:8080/occupational/vitalsign/:id',{id: '@id'},
				{
					'update':{
						method:'PUT',
					}
				}),
			vitals: $resource('http\://localhost\:8080/occupational/vitalsign/names/:id',{id: '@id'})
		};
	});
})()