(function(){
	hxplus.factory('LoginRepository', function($resource){
		return {
			login: $resource('http\://localhost\:8080/occupational/login')
		};
	});
})()