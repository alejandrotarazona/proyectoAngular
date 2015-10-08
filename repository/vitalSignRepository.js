(function(){
	hxplus.factory('VitalSignRepository', function($resource){
		return {
			vitalSign: $resource('http\://localhost\:8080/occupational/vitlasign/:id',{id: '@id'},
				{
					'update':{
						method:'PUT',
					}
				}),
			vitals: 
		};
	});
})()