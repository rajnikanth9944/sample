function patientService(PATIENT_MODULE_CONFIG, MODULE_CONFIG, $http) {
	this.addPatient = function(patient) {
		return $http.post(PATIENT_MODULE_CONFIG.ADD_PATIENT(), patient);
	};
	this.findAllPatient = function(page, size) {
		return $http.get(PATIENT_MODULE_CONFIG.FIND_ALL_PATIENT(page, size));
	};
	this.getAllPatients = function(adminUserName) {
		return $http.get(PATIENT_MODULE_CONFIG.GET_ALL_PATIENTS(adminUserName));
	};
	this.getAllDocuments = function(patientId,) {
		return $http.get(PATIENT_MODULE_CONFIG
				.GET_ALL_PATIENT_DOCUMENTS(patientId));
	};
	this.getAllDocumentsByStatus = function(patientId,status) {
		return $http.get(PATIENT_MODULE_CONFIG
				.GET_ALL_PATIENT_DOCUMENTSBY_STATUS(patientId,status));
	};
	this.getPatientDocument = function(path) {
		return $http.get(PATIENT_MODULE_CONFIG.GET_PATIENT_DOCUMENT(path));
	};
	this.updatePatient = function(patientObject) {
		return $http.put(PATIENT_MODULE_CONFIG.UPDATE_PATIENT(),patientObject);
	};
	this.totalPatientsRegistered = function(adminUserName) {
		return $http.get(PATIENT_MODULE_CONFIG.GET_TOTAL_PATIENTS_REGISTERD(adminUserName));
	};
	this.inActivePatients = function(adminUserName) {
		return $http.get(PATIENT_MODULE_CONFIG.GET_ALL_INACTIVE_PATIENTS(adminUserName));
	};
	this.patientGoalsInformation = function(id) {
		return $http.get(PATIENT_MODULE_CONFIG.PATIENT_GOALS_INFORMATION(id));
	};
	this.generateProgressReport = function(id) {
		return $http.get(PATIENT_MODULE_CONFIG.GENERATE_PROGRESS_REPORT(id),{
            responseType : 'arraybuffer'
        });
	};
	
	this.generateEvaluationReport = function(id) {
		return $http.get(PATIENT_MODULE_CONFIG.GENERATE_EVALUATION_REPORT(id),{
            responseType : 'arraybuffer'

        });
	};
	
	this.generateExitNoteReport = function(id) {
		return $http.get(PATIENT_MODULE_CONFIG.GENERATE_EXIT_NOTE_REPORT(id),{
            responseType : 'arraybuffer'

        });
	};


	this.uploadDocument = function(xlsfile) {
		var fd = new FormData();
		fd.append('file', xlsfile);
		return $http({
			method : 'POST',
			url : PATIENT_MODULE_CONFIG.UPLOAD_DOCUMENT(),
			data : fd,
			transformRequest : angular.identity,
			headers : {
				'Content-Type' : undefined
			}
		}).success(function(data, status, headers, config) {
			return data;
		}).error(function(data, status, headers, config) {
			return data;

		});
	};

	this.findAllpatientsByPaginationByRole = function(adminUsername, page, size) {
		return $http.get(PATIENT_MODULE_CONFIG.FIND_ALL_PATIENTS_BY_ROLE(
				adminUsername, page, size));
	};
	this.getNewPatientsCount = function(adminUserName) {
		return $http.get(PATIENT_MODULE_CONFIG.GET_NEW_PATIENT_COUNT(adminUserName));
	};
	
	this.findDoctorByPatientId=function(id){
		return $http.get(PATIENT_MODULE_CONFIG.FIND_DOCTOR_BY_PATIENTID(id));
	};

	this.deleteDocumnet=function(documentId){
		return $http.delete(PATIENT_MODULE_CONFIG.DELETE_DOCUMENT_BY_ID(documentId));
	};
	
	this.getAllPatientsByRole=function(username){
		return  $http.get(PATIENT_MODULE_CONFIG.GET_ALL_PATIENTS_BY_ROLE(username));
	};
	
	this.assignGoalstoPatient=function(listOfSelectedGoals,patientId){
		return  $http.post(MODULE_CONFIG.ASSIGN_GOALS_TO_PATIENT(patientId),listOfSelectedGoals);
	};
}
angular.module('HealthApplication').service('patientService', patientService);