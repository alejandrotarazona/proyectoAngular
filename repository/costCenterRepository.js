(function(){
	hxplus.factory('CostCenterRepository',function($resource){
		return {
			costcenter: $resource('http\://localhost\:8080/occupational/costcenter/:idCostCenter/',{idCostCenter: '@idCostCenter'},
				{
					'update':{
						method:'PUT',
					}
				}),
			costCenterUser: $resource('http\://localhost\:8080/occupational/costcenter/byuser/:idUser',{idUser: '@idUser'})
		}
	});
})()