(function(){
    hxplus.factory('FileRepository', function($resource){
        return {
            file: $resource('http\://localhost\:8080/occupational/file/:id',{id: '@id'},
                {
                    'update':{
                        method:'PUT',
                    }
                }),

            filesByConsult : $resource('http\://localhost\:8080/occupational/file/byconsult/:idConsult',{idConsult:'@idConsult'}),
            fileByExam : $resource('http\://localhost\:8080/occupational/file/byexam/:idExam',{idExam:'@idExam'}),
            fileIdByExam : $resource('http\://localhost\:8080/occupational/file/exam/:idExam',{idExam:'@idExam'}),
            downloadFile : $resource('http\://localhost\:8080/occupational/file/getImage/:idFile',{idFile:'@idFile'}),

        }
    })
})()