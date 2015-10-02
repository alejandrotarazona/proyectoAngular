(function(){
	hxplus.controller('LoginController', function($state,$http,LoginRepository){
			
		this.submit = function(loginRequest){

			LoginRepository.login.save(loginRequest).$promise.then(function(data){
					console.log(data);
					localStorage.user = JSON.stringify(data.user);
					localStorage.token = data.token;
					$http.defaults.headers.common.Authorization = 'Bearer ' + data.token;
					$state.go('home.main', {idLogged: data.user.id});
			});
		};
	});
})()