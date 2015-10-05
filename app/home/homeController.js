(function(){
	hxplus.controller('HomeController', function($stateParams, $state, $mdDialog, 
			$translate,$http, UserRepository){

		this.user = UserRepository.user.get({id: $stateParams.idLogged});

		this.announceClick = function(index) {
		    $mdDialog.show(
		      $mdDialog.alert()
		        .title('You clicked!')
		        .content('You clicked the menu item at index ' + index)
		        .ok('Nice')
		    );
		};

		this.logout = function(){
			delete localStorage.token;
			delete localStorage.user;
			$http.defaults.headers.common.Authorization = '';
			$state.go('login');
		}

		this.switchLanguage = function (key) {
    		$translate.use(key);
  		};
	});
})()