(function(){
	hxplus.controller('HomeController', function($stateParams, $mdDialog, UserRepository){
		this.user = UserRepository.user.get({id: $stateParams.id});

		this.announceClick = function(index) {
		    $mdDialog.show(
		      $mdDialog.alert()
		        .title('You clicked!')
		        .content('You clicked the menu item at index ' + index)
		        .ok('Nice')
		    );
		  };
	});
})()