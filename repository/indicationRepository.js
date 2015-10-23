(function(){
	hxplus.factory('IndicationRepository', function($resource){
		return {
			indication : $resource('http\://localhost\:8080/occupational/indication/:id',{id:'@id'},
			{
				'update':{
					method : 'PUT'
				}
			}),

			indicationByPrescription : $resource('http\://localhost\:8080/occupational/indication/byprescription/:idPrescription',{idPrescription:'@idPrescription'})
		}
	})
})()