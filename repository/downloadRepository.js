(function(){
	hxplus.factory('DownloadRepository', function($resource){
		return{
			pdfDownload : $resource('http\://localhost\:8080/occupational/download/:type',{type:'@type'},{
				'download': {
                  method: 'POST',
                  //url: 'http\://localhost\:8080/occupational/download/inform',
                  headers: {
                      accept: 'application/pdf' //or whatever you need
                  },
                  responseType: 'arraybuffer',
                  cache: false,
                  transformResponse: (data, headers) => {
                      var pdf = null;
                      if (data) {
                          pdf = new Blob([data], {
                              type: 'application/pdf' //or whatever you need, should match the 'accept headers' above
                          });
                      }
 
                      //server should sent content-disposition header
                      var string = getFileNameFromHeader(headers('content-disposition'));
                      var result = {
                          blob: pdf,
                          fileName: string
                      };
 
                      return {
                          response: result
                      };

                      function getFileNameFromHeader(header){
                        if (!header) return null;
                        var result= header.split(";")[1].trim().split("=")[1];
                        return result.replace(/"/g, '');
                      };
	                }
	            }
	        })
		}
	})
})()