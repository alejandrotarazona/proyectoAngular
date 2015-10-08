(function(){
	hxplus.controller('PatientController', function($state,$stateParams,$translate,$http,$scope, 
		PatientRepository, CostCenterRepository, PostRepository, ConsultRepository, DrugRepository,VitalSignRepository){
		
		var global = this;
		this.inConsult = false;
		this.inConsultTab = 1;

		this.defaultImg = {
			url : '/resource/images/nophotouploaded.png'
		};

		this.drugs = DrugRepository.drug.query({});
		this.vitals = 

		this.consultRequest = {};
		this.consultRequest.diagnostics = [];
		this.consultRequest.instructions = [];
		global.consultRequest.prescriptions = [];

		PatientRepository.patient.get({idUser:$stateParams.idPatient}).$promise.then(function(data){
			global.patient = data;

			global.works = CostCenterRepository.costCenterUser.get({idUser:data.user.id});
			global.post = PostRepository.postUser.get({idUser:data.user.id});
			global.consults = ConsultRepository.consultHistory.query({idHistory:data.history.id});
			
		});	

		this.consult = function(){
			global.inConsult = true;
		};

		this.setInConsultTab = function(setTab){
			this.inConsultTab = setTab;
		};

		this.isSelectedInConsultTab = function(checkTab){
			return global.inConsultTab === checkTab;
		},

		this.saveConsult = function(){
			this.setInConsultTab(1);
			global.inConsult = false;
		};

		this.deleteConsult = function(){
			this.setInConsultTab(1);
			global.inConsult = false;
		};

		this.addDiagnostic = function(){
			if(global.diagnosticRequest != null && global.diagnosticRequest.details != null){
				global.consultRequest.diagnostics.push(global.diagnosticRequest);
				global.diagnosticRequest = null;
			}

			//global.diagnosticRequest.$setPristine();
			//global.diagnosticRequest.$setUntouched();
		};

		this.delDiagnostic = function(index){
			global.consultRequest.diagnostics.splice(index,1);
		};

		this.addInstruction = function(){
			if(global.instructionRequest != null && global.instructionRequest.instruction != null){
				global.consultRequest.instructions.push(global.instructionRequest);
				global.instructionRequest = null;
			}
		};

		this.delInstruction = function(index){
			global.consultRequest.instructions.splice(index,1);
		};

		this.addPrescription = function(){
			if(global.prescriptionRequest != null && global.prescriptionRequest.indication != null
				&& global.prescriptionRequest.indication.description != null){
				global.consultRequest.prescriptions.push(global.prescriptionRequest);
				global.prescriptionRequest = null;
			}
		};

		this.delPrescription = function(index){
			global.consultRequest.prescriptions.splice(index,1);
		};

	});
})()