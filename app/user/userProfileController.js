(function(){
	hxplus.controller('UserProfileController', function($stateParams, UserRepository){
		this.user = UserRepository.user.get({id: $stateParams.idLog});
		console.log(this.user);
	});
})()