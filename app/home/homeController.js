(function(){
	hxplus.controller('HomeController', function($stateParams, $state, $mdDialog, 
			$translate, UserRepository){

		this.user = UserRepository.user.get({id: $stateParams.id});

		this.announceClick = function(index) {
		    $mdDialog.show(
		      $mdDialog.alert()
		        .title('You clicked!')
		        .content('You clicked the menu item at index ' + index)
		        .ok('Nice')
		    );
		};

		this.logout = function(){
			localStorage.token = {};
			$state.go('login');
		}

		this.switchLanguage = function (key) {
    		$translate.use(key);
  		};
	});
})()