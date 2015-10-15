(function(){
	hxplus.controller('DoctorMainController',function($state,$stateParams,$http,DoctorRepository,PatientRepository){

        var global = this;

		this.doctor = DoctorRepository.doctorUser.get({id: $stateParams.idLogged});
        this.doctor.patients = {};
        this.patients = {};

        PatientRepository.patients.query({id: $stateParams.idLogged}).$promise.then(function(data){
            //console.log(data);
            global.doctor.patients = data;
            global.patients = global.doctor.patients;
        });

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

        this.programConsult = function(patient){
            console.log("En programar Consulta");
            console.log(patient.user.firstName);
        };

        this.addPatient = function(){
            $state.go('home.addPatient');
        };
    });

})()