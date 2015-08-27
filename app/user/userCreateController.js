(function(){
	hxplus.controller('UserCreateController', function($state,$http,UserRepository){
		this.submit = function(createRequest, passwordAuth){
			if(passwordAuth == createRequest.password){
				UserRepository.user.save(createRequest).$promise.then(function(data){
					//Pop-up de creación exitosa...
					$state.transitionTo('home.userList',
						{
							reload:true,
						}
					);
				});
			} else {
				//Pop-up de creación fallida
				console.log("No coinciden las contraseñas...");
			}
		}
	});
})()