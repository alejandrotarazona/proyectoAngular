(function(){
	hxplus.factory('PostRepository',function($resource){
		return {
			post: $resource('http\://localhost\:8080/occupational/post/:idPost/',{idPost: '@idPost'},
				{
					'update':{
						method:'PUT',
					}
				})
		}
	});
})()