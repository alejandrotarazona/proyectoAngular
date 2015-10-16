(function(){
	hxplus.factory('BackgroundRepository',function($resource){
		return {
			background : $resource('http\://localhost\:8080/occupational/background/:idBackground/', {idBackground: '@idBackground'},
			{
				'update':{
					method:'PUT',
				}
			}),

			backgroundByPatient: $resource('http\://localhost\:8080/occupational/background/bypatient/:idPatient/', {idPatient: '@idPatient'})
		}
	});
})()