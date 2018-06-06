function evalutionSheetService(PATIENT_MODULE_CONFIG, $http) {

	this.addprogressSheet = function(progress) {
		return $http.post(PATIENT_MODULE_CONFIG.ADD_PATIENT_EVALUTION_SHEET(),progress);
	};
	this.addProgressNote = function(progressNote1) {
		return $http.post(PATIENT_MODULE_CONFIG.ADD_PATIENT_EVALUTION_SHEET(),progressNote1);
	};
	this.addExitNote = function(exitNote) {
		return $http.post(PATIENT_MODULE_CONFIG.ADD_PATIENT_EVALUTION_SHEET(),exitNote);
	};
	this.findEvalutionSheetByStatusAndPatientId = function(patientId, staus) {
		return $http.get(PATIENT_MODULE_CONFIG
				.FIND_EVALUTIONSHEET_BY_PATIENTID_AND_STATUS(patientId, staus));
	};
	this.getProgressSheetReportBy = function(patientId) {
		return $http.get(PATIENT_MODULE_CONFIG
				.GET_EVALUTION_SHEET_BY_PATIENTID_STATUS_INPROGRESSSHEET(patientId));
	};
	this.getExitSheetReportBy = function(patientId) {
		return $http.get(PATIENT_MODULE_CONFIG.GET_EVALUTION_SHEET_BY_PATIENTID_STATUS_INEXITSHEET(patientId));
	};
}

angular.module('HealthApplication').service('evalutionSheetService',
		evalutionSheetService);