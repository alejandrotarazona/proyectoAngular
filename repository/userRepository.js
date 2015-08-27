(function(){
	hxplus.factory('UserRepository', function($resource){
		return {
			user: $resource('http\://localhost\:8080/occupational/user/:id',{id: '@id'},
				{
					'update':{
						method:'PUT',
					}
				})
		};
	});
})()