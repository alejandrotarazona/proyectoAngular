(function(){
	var app = angular.module('login', ['ngResource']);

	app.controller('LoginController', function($resource){
		var login = $resource('http\://localhost\:8080/occupational/login');
		this.response = function(loginRequest){
			login.save(loginRequest).$promise.then(function(data){
				console.log(data);
			});
		};
	});
})();
