(function(){
	hxplus.controller('PatientController', function($state,$stateParams,$translate,$http,$scope, 
		PatientRepository, CostCenterRepository, PostRepository, ConsultRepository, DrugRepository,VitalSignRepository){
		
		var global = this;
		this.inConsult = false;
		this.inConsultTab = 1;
		this.otherOps = false;

		this.defaultImg = {
			url : '/resource/images/nophotouploaded.png'
		};

		this.drugs = DrugRepository.drug.query({});
		this.vitals = VitalSignRepository.vitals

		this.consultRequest = {};
		this.consultRequest.diagnostics = [];
		this.consultRequest.instructions = [];
		this.consultRequest.prescriptions = [];
		this.consultRequest.vitalsigns = [];

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

		this.showOther = function(){
			global.otherOps = true;
		};

		this.hideOther = function(name){
			global.vitalsign.name2 = null;
			global.vitalsign = name;
			global.otherOps = false;
		},

		this.addVitalSign = function(){
			console.log("En addVitalSign");
			if(global.vitalsign.name2 != null){
				console.log("En el 1er if");
				console.log("name2:");
				console.log(global.vitalsign.name2);
				global.vitalsign.name = global.vitalsign.name2;
			} else {
				console.log("No entró al primer if");
			};

			if(global.vitalsign != null && global.vitalsign.name != null && global.vitalsign.description != null){
				console.log("En el 2do if");
				console.log("vitalsign:");
				console.log(global.vitalsign);
				global.consultRequest.vitalsigns.push(global.vitalsign);
				global.vitalsign = null;
			} else {
				console.log("No entró al segundo if");
			};
		};

		this.delVitalSign = function(index){
			global.consultRequest.vitalsigns.splice(index,1);
		};
	});
})()