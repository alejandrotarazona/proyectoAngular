(function(){
	hxplus.factory('PrescriptionRepository', function($resource){
		return {
			prescription : $resource('http\://localhost\:8080/occupational/prescription/:id',{id:'@id'},
			{
				'update':{
					method : 'PUT'
				}
			}),

			prescriptionByConsult : $resource('http\://localhost\:8080/occupational/prescription/byconsult/:idConsult',{idConsult:'@idConsult'})
		}
	})
})()