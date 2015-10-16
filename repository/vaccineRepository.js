(function(){
	hxplus.factory('VaccineRepository',function($resource){
		return {
			vaccine : $resource('http\://localhost\:8080/occupational/vaccine/:idVaccine/', {idVaccine: '@idVaccine'},
			{
				'update':{
					method:'PUT',
				}
			}),

			vaccineByPatient: $resource('http\://localhost\:8080/occupational/vaccine/bypatient/:idPatient/', {idPatient: '@idPatient'})
		}
	});
})()