(function(){
	hxplus.controller('UserFormcontroller', function($stateParams, UserRepository){
		this.user = UserRepository.user.get({id: $stateParams.id});

		this.response = function(userRequest){
			UserRepository.user.update({id:this.user.id}, userRequest).$promise.then(function(data){
				console.log(data);
				localStorage.user = JSON.stringify(data);
				$state.go('home.userProfile', {id: data.id});
			});		
		};
	}
})()