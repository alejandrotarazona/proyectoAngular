(function(){
	hxplus.factory('DepartmentRepository',function($resource){
		return {
			department: $resource('http\://localhost\:8080/occupational/department/:idDepartment/',{idDepartment: '@idDepartment'},
				{
					'update':{
						method:'PUT',
					}
				})
		}
	});
})()