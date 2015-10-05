(function(){
	hxplus.controller('ListUserController', function($state,$http,UserRepository){
		this.listUsers = UserRepository.user.query();

		editUser = function(user){
			$state.go('home.userDetails',{id: user.id});
		};
	});
})()