(function(){
	hxplus.factory('DrugRepository', function($resource){
		return {
			drug: $resource('http\://localhost\:8080/occupational/drug/:id',{id: '@id'},
				{
					'update':{
						method:'PUT',
					}
				}),
		};
	});
})()