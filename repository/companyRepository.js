(function(){
	hxplus.factory('CompanyRepository',function($resource){
		return {
			company: $resource('http\://localhost\:8080/occupational/company/:idCompany/',{idCompany: '@idCompany'},
				{
					'update':{
						method:'PUT',
					}
				})
		}
	});
})()