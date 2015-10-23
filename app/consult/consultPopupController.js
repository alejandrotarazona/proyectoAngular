(function(){
	hxplus.controller('ConsultPopupController', function($state,$stateParams,$translate,$http,$scope,
		ConsultRepository, VitalSignRepository, SoapNoteRepository, InstructionRepository, PrescriptionRepository, IndicationRepository, ExamRepository, 
		FileRepository){

		var global = this;

		this.consult = $stateParams.consult;
		delete $stateParams.consult;

		//if(this.consult.diagnostics === []){delete this.consult.diagnostics}

		console.log(this.consult);

		this.consult.soapnote = SoapNoteRepository.soapnote.get({idSoapNote:this.consult.id});
		this.consult.vitalsigns = VitalSignRepository.vitalSignByConsult.query({idConsult: this.consult.id});
		console.log(this.consult.vitalsigns);
		this.consult.instructions = InstructionRepository.instructionByConsult.query({idConsult: this.consult.id});

		PrescriptionRepository.prescriptionByConsult.query({idConsult:this.consult.id}).$promise.then(function(data){
			data.forEach(function(prescription){
				prescription.indication = IndicationRepository.indicationByPrescription({idPrescription: prescription.id});
			});
			global.consult.prescriptions = data;
			//console.log("Pasadas prescripciones");
			//console.log(global.isEmpty(data));
		});

		ExamRepository.examReqByConsult.query({idConsult:this.consult.id}).$promise.then(function(data){
			global.consult.examRequests = data;	
			//console.log("Pasado los examenes solicitados");
		});
		this.consult.files = [];
		ExamRepository.examRecByConsult.query({idConsult:this.consult.id}).$promise.then(function(data){
			data.forEach(function(exam){
				FileRepository.fileByExam.get({idExam: exam.id}).$promise.then(function(file){
					exam.file = file;
					global.consult.files.push(file);
				});
			});
			global.consult.examRecieved = data;	
			//console.log("Pasado los examenes recibidos");
		});

		

		this.inConsultTab = 1;

		this.setInConsultTab = function(setTab){
			this.inConsultTab = setTab;
		};

		this.isEmpty = function(list){
			if(list === undefined) return true;
			return (list.length <= 0);
		};

		this.isSelectedInConsultTab = function(checkTab){
			return global.inConsultTab === checkTab;
		};

		this.download = function(file){
			console.log("A descargar un archivo =D");
		};

	});
})()