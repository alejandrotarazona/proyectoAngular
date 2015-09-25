(function(){
	hxplus.controller('DoctorMainController',function($state,$stateParams,$http,DoctorRepository,PatientRepository){

		this.doctor = DoctorRepository.doctorUser.get({id: $stateParams.idLog});
        this.doctor.patients = PatientRepository.patients.query({id: $stateParams.idLog})
        this.patients = this.doctor.patients;

/*    console.log("Id del Loggeado");
    console.log($stateParams.idLog);
    console.log("Doctor:");
    console.log(this.doctor);
    console.log("Pacientes:");
    console.log(this.doctor.patients);
    console.log("Pacientes 2:");
    console.log(this.patients);
*/  
        this.goToPatient = function(patient){
            console.log("goToPatient");
            console.log(patient.user.username);
            $state.go('home.patient',{idPatient:patient.id});
        };
    });

})()