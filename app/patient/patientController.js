(function(){
	hxplus.controller('PatientController', function($state,$stateParams,$translate,$http,$scope,$mdDialog,$sce,
		DoctorRepository,
		PatientRepository, CostCenterRepository, PostRepository, ConsultRepository, DiagnosticRepository, DrugRepository, VitalSignRepository, ExamRepository,
		SoapNoteRepository, InstructionRepository, PrescriptionRepository, IndicationRepository, FileRepository
		){
		
		var global = this;

		this.inConsult = false;
		this.createConsultTab = 1;

		this.otherOps = false;

		this.defaultImg = {
			url : '/resource/images/nophotouploaded.png'
		};

		PatientRepository.patient.get({idUser:$stateParams.idPatient}).$promise.then(function(data){
			global.patient = data;
			global.works = CostCenterRepository.costCenterUser.get({idUser:data.user.id});
			global.post = PostRepository.postUser.get({idUser:data.user.id});

			ConsultRepository.consultByPatient.query({idPatient:data.id}).$promise.then(function(data2){
				//console.log(data2);
				var index = 0;
				global.consults = data2;
				global.consults.forEach(function(consult){
					DiagnosticRepository.byconsult.query({idConsult: consult.id}).$promise.then(function(diagnostics){
						consult.diagnostics = diagnostics;
					});

					consult.soapnote = SoapNoteRepository.soapnote.get({idSoapNote:consult.id});
					consult.vitalsigns = VitalSignRepository.vitalSignByConsult.query({idConsult:consult.id});
					//console.log(consult.vitalsigns);
					consult.instructions = InstructionRepository.instructionByConsult.query({idConsult:consult.id});
					console.log("instructions");
					console.log(consult.instructions);

					PrescriptionRepository.prescriptionByConsult.query({idConsult:consult.id}).$promise.then(function(data){
						data.forEach(function(prescription){
							prescription.indication = IndicationRepository.indicationByPrescription({idPrescription: prescription.id});
						});
						consult.prescriptions = data;
						//console.log("Pasadas prescripciones");
						//console.log(global.isEmpty(data));
					});

					ExamRepository.examReqByConsult.query({idConsult:consult.id}).$promise.then(function(data){
						consult.examRequests = data;	
						//console.log("Pasado los examenes solicitados");
					});

					consult.files = [];
					ExamRepository.examRecByConsult.query({idConsult:consult.id}).$promise.then(function(data){
						data.forEach(function(exam){
							FileRepository.fileByExam.get({idExam: exam.id}).$promise.then(function(file){
								exam.file = file;
								consult.files.push(file);
							});
						});
						consult.examRecieved = data;	
						//console.log("Pasado los examenes recibidos");
					});

					consult.old = global.timePassed(consult.consultDate);
					//console.log(consult);
					global.consultTab[index] = 1;
					index++;

				});
			});
			
		});	

		//console.log(global);

		this.masculin = function(sex){
			return sex == "M";
		};

		this.age = function(){
			if(global.patient === undefined) return 0;
			var date2 = new Date(global.patient.user.birthDate);
			var diff = Math.abs((new Date()).getFullYear() - date2.getFullYear());
			return diff;
		};

		this.isEmpty = function(list){
			if(list === undefined) return true;
			return (list.length <= 0);
		};

		this.openHistory = function(type){
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

		this.createConsult = function(){
			global.consultRequest = {};
			global.inConsult = true;
			global.drugs = DrugRepository.drug.query({});
			global.vitals = VitalSignRepository.vitals.query();
			global.patient = global.patient;
			global.doctor = DoctorRepository.doctor.get({id:$stateParams.idLogged});

			//console.log(global.vitals);

			global.consultRequest = {};
			global.consultRequest.diagnostics = [];
			global.consultRequest.instructions = [];
			global.consultRequest.prescriptions = [];
			global.consultRequest.vitalsigns = [];
			global.consultRequest.requestExams = [];
			global.pendingExams = ExamRepository.examPendingByPatient.query({idPatient:$stateParams.idPatient});	
		};

		this.setCreateConsultTab = function(setTab){
			this.createConsultTab = setTab;
		};

		this.isSelectedCreateConsultTab = function(checkTab){
			return this.createConsultTab === checkTab;
		};

		this.saveConsult = function(consultRequest){
			consultRequest.patient = global.patient;
			consultRequest.doctor = global.doctor;
			console.log(consultRequest);
			ConsultRepository.consult.save(consultRequest).$promise.then(function(newConsult){
				global.consults.push(newConsult);
				$state.transitionTo('home.patient',{},
						{
							inherit:true,
							reload:true,
						}
					);
			});
			this.setCreateConsultTab(1);
			global.inConsult = false;
		};

		this.deleteConsult = function(){
			this.consultRequest = {};
			this.consultRequest.diagnostics = [];
			this.consultRequest.instructions = [];
			this.consultRequest.prescriptions = [];
			this.consultRequest.vitalsigns = [];
			this.setCreateConsultTab(1);
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
		};

		this.addVitalSign = function(){
			//console.log("En addVitalSign");

			if(global.vitalsign.name2 != null){
			//	console.log("En el 1er if");
			//	console.log("name2:");
			//	console.log(global.vitalsign.name2);
				
				global.hideOther(global.vitalsign.name2);
			} else {
				console.log("No entró al primer if");
			};

			if(global.vitalsign != null && global.vitalsign.name != null && global.vitalsign.description != null){
				//console.log("En el 2do if");
				//console.log("vitalsign:");
				//console.log(global.vitalsign);
				global.consultRequest.vitalsigns.push(global.vitalsign);
				global.vitalsign = null;
			} else {
				console.log("No entró al segundo if");
			}
		};

		this.delVitalSign = function(index){
			global.consultRequest.vitalsigns.splice(index,1);
		};

		this.orderExam = function(exam){
			global.consultRequest.requestExams.push(global.examRequest);
			global.examRequest = null;
		};

		//---------------------- Consultas --------------------------//
		this.consultTab = [];

		this.setInConsultTab = function(index, setTab){
			this.consultTab[index] = setTab;
		};

		this.isSelectedInConsultTab = function(index, checkTab){
			return global.consultTab[index] === checkTab;
		};

		this.timePassed = function(dateInMilis){
			var today = new Date();
			var date = new Date(dateInMilis);

			var old = {};

			old.years 	= ((today).getFullYear() - (date).getFullYear());
			old.months 	= ((today).getMonth() - (date).getMonth()); 
			old.days 	= ((today).getDate() - (date).getDate());
			old.hours 	= ((today).getHours() - (date).getHours());

			return old;
		};

		this.checkDate = function(value){
			return value > 0;
		};

		this.download = function(file){
			console.log("A descargar un archivo =D");
		};
	});
})()