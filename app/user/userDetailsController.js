(function(){
	hxplus.controller('UserDetailsController',function($stateParams, $state,$http, UserRepository){
		this.user = UserRepository.user.get({id: $stateParams.id});

		deleteUser = function(user){
			UserRepository.remove({id: user.id});
			//$state.go('home.');
			$state.transitionTo('home.listUser',
				{
					reload:true,
				}
			);
		};
	});
})()