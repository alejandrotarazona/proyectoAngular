(function(){
	hxplus.controller('UserFormController', function($state, $stateParams, UserRepository){
		this.user = UserRepository.user.get({id: $stateParams.idLog});

		this.submit = function(userRequest){
			UserRepository.user.update({id:userRequest.id}, userRequest).$promise.then(function(data){
					localStorage.user = JSON.stringify(data);
					//$state.go('home',{id: data.id})
					$state.transitionTo('home.userProfile', {idLog: data.id, id: data.id},
						{
							reload:true,
						}
					);
				}
			);		
		};
	});
})()