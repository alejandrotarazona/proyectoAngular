(function(){
	hxplus.factory('DownloadRepository', function($resource){
		return{
			downloadInform : $resource('http\://localhost\:8080/occupational/download/inform');
		}
	})
})()