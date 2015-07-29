(function(){
	hxplus.controller('LoginController', function($resource,$state){
		var login = $resource('http\://localhost\:8080/occupational/login');
		this.response = function(loginRequest){
			login.save(loginRequest).$promise.then(function(data){
				console.log(data);
				$state.go('home');
			});
		};
	});
})()