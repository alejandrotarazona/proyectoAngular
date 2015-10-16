(function(){
	hxplus.controller('UserProfileController', function($stateParams, UserRepository){
		this.user = UserRepository.user.get({id: $stateParams.idLogged});
		console.log(this.user);
	});
})()