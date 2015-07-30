(function(){
	hxplus.controller('UserProfileController', function($stateParams, UserRepository){
		this.user = UserRepository.user.get({id: $stateParams.id});
		console.log(this.user);
	});
})()