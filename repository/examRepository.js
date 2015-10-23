(function(){
	hxplus.factory('ExamRepository', function($resource){
		return {
			exam : $resource('http\://localhost\:8080/occupational/exam/:id',{id:'@id'},
			{
				'update':{
					method : 'PUT'
				}
			}),

			examPendingByPatient : $resource('http\://localhost\:8080/occupational/exam/pending/bypatient/:idPatient', {idPatient:'@idPatient'}),
			examReqByConsult : $resource('http\://localhost\:8080/occupational/exam/requested/byconsult/:idConsult', {idConsult:'@idConsult'}),
			examRecByConsult : $resource('http\://localhost\:8080/occupational/exam/received/byconsult/:idConsult', {idConsult:'@idConsult'})
		}
	})
})()