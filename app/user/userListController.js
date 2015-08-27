(function(){
	hxplus.controller('ListUserController', function($state,$http,UserRepository){
		this.listUsers = UserRepository.user.query();
	});
})()