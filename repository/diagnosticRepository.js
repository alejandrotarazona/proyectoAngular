(function(){
	hxplus.factory('DiagnosticRepository',function($resource){
		return {
			diagnostic : $resource('http\://localhost\:8080/occupational/diagnostic/:idDiagnostic/', {idDiagnostic: '@idDiagnostic'},
				{
					'update':{
						method:'PUT',
					}
				}),

			bypatient : $resource('http\://localhost\:8080/occupational/diagnostic/bypatient/:idPatient', {idPatient: '@idPatient'}),
			byconsult : $resource('http\://localhost\:8080/occupational/diagnostic/byconsult/:idConsult', {idConsult: '@idConsult'})
		}
	});
})()