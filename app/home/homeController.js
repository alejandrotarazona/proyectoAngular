(function(){
	hxplus.controller('HomeController', function($resource,$state,$stateParams, UserRepository){
		console.log($stateParams.id);
		this.user = UserRepository.user.get({id: $stateParams.id});
	});
})()