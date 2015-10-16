(function(){
	hxplus.controller('UserDetailsController',function($stateParams, $state,$http, UserRepository){
		
		this.userDetails = UserRepository.user.get({id: $stateParams.id});

		console.log("Usuario cargado:");
		console.log(this.userDetails);

		user = this.userDetails;

		this.deleteUser = function(){
			console.log("Entrando a \"deleteUser\"");
			console.log(user);
			UserRepository.user.remove({id: user.id});
			//$state.go('home.');
			$state.transitionTo('home.userList',{},
				{
					inherit:true,
					reload:true,
				}
			);
		};
	});
})()