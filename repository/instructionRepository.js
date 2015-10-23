(function(){
	hxplus.factory('InstructionRepository', function($resource){
		return {

			instruction : $resource('http\://localhost\:8080/occupational/instruction/:id',{id:'@id'},
			{
				'update' : {
					method: 'PUT',
				}
			}),

			instructionByConsult: $resource('http\://localhost\:8080/occupational/instruction/byconsult/:idConsult',{idConsult:'@idConsult'})
		}
	})
})()