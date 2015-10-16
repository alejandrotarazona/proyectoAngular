(function(){
	hxplus.controller('ConsultPopupController', function($state,$stateParams,$translate,$http,$scope,
		ConsultRepository){

		var global = this;

		console.log("En Popup");
		console.log($scope);
		console.log($stateParams);
		//console.log($scope.consult);

		this.inConsultTab = 1;

		this.setInConsultTab = function(setTab){
			this.inConsultTab = setTab;
		};

		this.isSelectedInConsultTab = function(checkTab){
			return global.inConsultTab === checkTab;
		};

	});
})()