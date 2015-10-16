(function(){
	hxplus.controller('PatientController', function($state,$stateParams,$translate,$http,$scope,$mdDialog,
		
		PatientRepository, CostCenterRepository, PostRepository, ConsultRepository, DiagnosticRepository, DrugRepository, VitalSignRepository, SoapNoteRepository){
		
		var global = this;
		this.inConsult = false;
		this.inConsultTab = 1;
		this.otherOps = false;

		this.defaultImg = {
			url : '/resource/images/nophotouploaded.png'
		};

		this.drugs = DrugRepository.drug.query({});
		this.vitals = VitalSignRepository.vitals.query();

		this.consultRequest = {};
		this.consultRequest.diagnostics = [];
		this.consultRequest.instructions = [];
		this.consultRequest.prescriptions = [];
		this.consultRequest.vitalsigns = [];

		PatientRepository.patient.get({idUser:$stateParams.idPatient}).$promise.then(function(data){
			global.patient = data;
			global.works = CostCenterRepository.costCenterUser.get({idUser:data.user.id});
			global.post = PostRepository.postUser.get({idUser:data.user.id});
			ConsultRepository.consultByPatient.query({idPatient:data.id}).$promise.then(function(data2){
				//console.log(data2);
				global.consults = data2;
				global.consults.forEach(function(consult){
					//console.log(consult);
					SoapNoteRepository.soapnote.get({idSoapNote: consult.id}).$promise.then(function(soap){
						consult.soapnote = soap;
					});

					DiagnosticRepository.byconsult.query({idConsult: consult.id}).$promise.then(function(diagnostics){
						consult.diagnostics = diagnostics;
					});
				});
			});
			
		});	

		this.openHistory = function(type){
			/*console.log("En openHistory");
			console.log(type);

			console.log("Id Paciente");
			console.log($stateParams.idPatient);
			*/
			var templates = [
				'app/background/backgroundPopup.html',
				'app/habit/habitPopup.html',
				'app/vaccine/vaccinePopup.html',
				'app/allergy/allergyPopup.html'
			];

			$mdDialog.show({
		      
		      templateUrl: templates[type-1],
		      parent: angular.element(document.body),
		      clickOutsideToClose:true
		    });
		};

		this.consult = function(){
			global.inConsult = true;
		};

		this.setInConsultTab = function(setTab){
			this.inConsultTab = setTab;
		};

		this.isSelectedInConsultTab = function(checkTab){
			return global.inConsultTab === checkTab;
		};

		this.saveConsult = function(consultRequest){
			this.setInConsultTab(1);
			global.inConsult = false;
		};

		this.deleteConsult = function(){
			this.consultRequest = {};
			this.consultRequest.diagnostics = [];
			this.consultRequest.instructions = [];
			this.consultRequest.prescriptions = [];
			this.consultRequest.vitalsigns = [];
			this.setInConsultTab(1);
			global.inConsult = false;
		};

		this.addDiagnostic = function(){
			if(global.diagnosticRequest != null && global.diagnosticRequest.details != null){
				global.consultRequest.diagnostics.push(global.diagnosticRequest);
				global.diagnosticRequest = {};
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
			global.vitalsign.name = name;
			global.vitalsign.name2 = null;
			global.otherOps = false;
		},

		this.addVitalSign = function(){
			console.log("En addVitalSign");

			if(global.vitalsign.name2 != null){
				console.log("En el 1er if");
				console.log("name2:");
				console.log(global.vitalsign.name2);
				
				global.hideOther(global.vitalsign.name2);
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
			}
		};

		this.delVitalSign = function(index){
			global.consultRequest.vitalsigns.splice(index,1);
		};

		this.goToConsult = function(index){

			$mdDialog.show({
		      
		      templateUrl: 'app/consult/consultPopup.html',
		      parent : angular.element(document.body),
		      preserveScope : true ,
		      locals : {variable : index},
		      //bindToController:true,
		      clickOutsideToClose:true,
		      escapeToClose:true
		    });
		};
	});
})()