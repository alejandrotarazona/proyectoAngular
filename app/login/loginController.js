(function(){
	hxplus.controller('LoginController', function($state, LoginRepository){

		this.submit = function(loginRequest){
			
			LoginRepository.login.save(loginRequest).$promise.then(function(data){
				localStorage.user = JSON.stringify(data);
				$state.go('home.main', {id: data.id});
			});
		};
	});
})()