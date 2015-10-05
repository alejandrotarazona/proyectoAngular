(function(){
	hxplus.controller('UserEditController', function($state, $stateParams, UserRepository){
		this.user = UserRepository.user.get({id: $stateParams.id});

		this.submit = function(userRequest){
			UserRepository.user.update({id:userRequest.id}, userRequest).$promise.then(function(data){
					localStorage.user = JSON.stringify(data);
					//$state.go('home',{id: data.id})
					$state.transitionTo('home.userDetails', {id: data.id},
						{
							inherit:true,
							reload:true,
						}
					);
				}
			);		
		};
	});
})()