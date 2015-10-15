(function(){
	hxplus.factory('SoapNoteRepository',function($resource){
		return {
			soapnote : $resource('http\://localhost\:8080/occupational/soapnote/:idSoapNote/', {idSoapNote: '@idSoapNote'},
				{
					'update':{
						method:'PUT',
					}
				})
		}
	});
})()