(function(){
	hxplus.factory('ConsultRepository',function($resource){
		return {
			consult: $resource('http\://localhost\:8080/occupational/consult/:idConsult/',{idConsult: '@idConsult'},
				{
					'update':{
						method:'PUT',
					}
				}),

			consultHistory: $resource('http\://localhost\:8080/occupational/consult/byhistory/:idHistory/',{idHistory: '@idHistory'})
		}
	});
})()