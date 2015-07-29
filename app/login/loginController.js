(function(){
	hxplus.controller('LoginController', function($resource,$state, LoginRepository){

		this.response = function(loginRequest){
			
			LoginRepository.login.save(loginRequest).$promise.then(function(data){
				console.log(data);
				localStorage.user = JSON.stringify(data);
				$state.go('home.main', {id: data.id});
			});
		};
	});
})()