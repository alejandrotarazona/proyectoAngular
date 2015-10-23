(function(){
	hxplus.factory('FileRepository', function($resource){
		return {
			file  : $resource('http\://localhost\:8080/occupational/file/:id',{id:'@id'},
			{
				'update':{
					method : 'PUT'
				}
			}),

			filesByConsult : $resource('http\://localhost\:8080/occupational/file/byconsult/:idConsult',{idConsult:'@idConsult'}),
			fileByExam : $resource('http\://localhost\:8080/occupational/file/byexam/:idExam',{idExam:'@idExam'})
		}
	})
})()