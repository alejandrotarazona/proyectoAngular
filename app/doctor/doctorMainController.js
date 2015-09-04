(function(){
	hxplus.controller('DoctorMainController',function($state,$stateParams,$http,DoctorRepository,PatientRepository){
		this.doctor = DoctorRepository.doctor.get({id: $stateParams.idLog});
		this.listPatients = DoctorRepository.doctorEager.get({id: $stateParams.idLog}).patients;
	});

  this.addPatient = function(){
    $state.go('home.doctor.addPatient',{});
  };

  this.goToPatient = function(user){
    console.log(user.id);
  };

	this.doSecondaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Secondary Action')
        .content('Secondary actions can be used for one click actions')
        .ariaLabel('Secondary click demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };
})()