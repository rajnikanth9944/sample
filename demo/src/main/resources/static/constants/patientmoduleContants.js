function PatientModuleConstants() {
	var protocol = "http";

	var host = "localhost";
	var port = 9002;

	/*
	 * var host = "ec2-54-183-128-252.us-west-1.compute.amazonaws.com"; var port =
	 * 8087;
	 */
	
	/* var host = "103.255.146.157"; 
	 var port = 9002;*/
	 

	var url = protocol + "://" + host + ":" + port + "/patientapp";
	return {
		PROTOCOL : protocol,
		HOST : host,
		PORT : port,
		URL : url,
		ADD_PATIENT : function() {
			return url + "/patient/";
		},
		FIND_ALL_PATIENT : function(page, size) {
			return url + "/patient/pagination?page=" + page + "&size=" + size;
		},
		UPDATE_PATIENT : function() {
			return url + "/patient/updatePatient";
		},
		UPLOADIMAGE : function() {
			return url + "/upload/fileUploadInLocalDirectory";
		},
		UPLOAD_DOCUMENT : function() {
			return url + "/upload/document/";
		},
		VIEW_IMAGE : function(profilePicPath) {
			return url + "/upload/" + profilePicPath;
		},
		GET_PATIENT_DOCUMENT : function(documentName) {
			return url + "/upload/" + documentName;
		},
		GET_ALL_PATIENT_DOCUMENTS : function(patientId) {
			return url + "/patient/allDocumentsbyPatient/" + patientId;
		},
		GET_ALL_PATIENT_DOCUMENTSBY_STATUS : function(patientId,status) {
			return url + "/patient/allDocumentsbyPatientAndStatus/" + patientId+"/"+status;
		},
		GET_NEW_PATIENT_COUNT : function(adminUserName) {
			return url + "/patient/findPatientsByToDayDate/" + adminUserName;
		},
		FIND_ALL_PATIENTS_BY_ROLE : function(adminUsername, page, size) {
			return url + "/patient/pagination/" + adminUsername + "?page="
					+ page + "&size=" + size;
		},
		GET_ALL_PATIENTS : function(adminUserName) {
			return url + "/patient/getAllpatients/" + adminUserName;
		},
		ADDEVALUTIONSHEET : function() {
			return url + "/saveEvalutionSheet";
		},
		ADD_PATIENT_EVALUTION_SHEET : function() {
			return url + "/savePatientEvalutionSheet";
		},
		ADD_PATIENT_PROGRESS_NOTE : function() {
			return url + "/saveProgressNote";
		},
		FIND_EVALUTIONSHEET_BY_PATIENTID_AND_STATUS : function(patientid,
				status) {
			return url + "/getEvalutionSheetBy/" + patientid + "/status/"
					+ status;
		},
		GET_EVALUTION_SHEET_BY_PATIENTID_STATUS_INPROGRESSSHEET : function(
				patientid) {
			return url + "/getProgressSheetBy/" + patientid;
		},
		GET_EVALUTION_SHEET_BY_PATIENTID_STATUS_INEXITSHEET : function(
				patientid) {
			return url + "/getExitSheetBy/" + patientid;
		},
		SAVE_PATIENT_GOALS : function(patientid) {
			return url + "/savePatientGoals/" + patientid;
		},
		GET_PATIENT_GOALS_BY_PATIENTID_AND_DATE : function() {
			return url + "/getAllPatientGoals";
		},
		GET_ALL_CREATEDDATES_OF_PATIENT_GOALS_BY_PATIENTID : function(patientid) {
			return url + "/getAllPatientGoalsCreatedDates/" + patientid;
		},
		VIEW_BYTE_IMAGE : function(username) {
			return url + "/upload/viewimage/" + username;
		},
		GET_TOTAL_PATIENTS_REGISTERD : function(adminUserName) {
			return url + "/patient/totalPatientsRegistered/" + adminUserName;
		},
		GET_ALL_INACTIVE_PATIENTS : function(adminUserName) {
			return url + "/patient/getAllInactivePatients/" + adminUserName;
		},
		GENERATE_PROGRESS_REPORT : function(id) {
			return url + "/report/progress/" + id;
		},
		GENERATE_EVALUATION_REPORT : function(id) {
			return url + "/report/evaluation/" + id;
		},
		GENERATE_EXIT_NOTE_REPORT : function(id) {
			return url + "/report/exitNote/" + id;
		},
		PATIENT_GOALS_INFORMATION : function(id) {
			return url + "/getAllPatientGoalsInPresentWeek/" + id;
		},
		GET_ACTIVE_DOCTORS_PER_PRESENT_YEAR : function(adminUserName, year) {
			return url + "/dashboard/ActiveDoctorsPerPresentYear/"
					+ adminUserName + "/" + year;
		},
		GET_ACTIVE_USERS_PER_PRESENT_YEAR : function(adminUserName, year) {
			return url + "/dashboard/ActiveUsersPerPresentYear/"
					+ adminUserName + "/" + year;
		},
		GET_TOTAL_PATIENTS_PER_PRESENT_YEAR : function(adminUserName, year) {
			return url + "/dashboard/TotalPatientsRegisteredPerPresentYear/"
					+ adminUserName + "/" + year;
		},
		GET_TODAY_PATIENTS_DATA : function(adminUserName) {
			return url + "/dashboard/TodayPatients/" + adminUserName;
		},
		FIND_DOCTOR_BY_PATIENTID : function(patientId) {
			return url + "/patient/getDoctorByPatientId/" + patientId;
		},
		DELETE_DOCUMENT_BY_ID : function(documentId) {
			return url + "/patient/deleteDocumentByPatient/" + documentId;
		},
		DISPLAY_PDF : function(documentId) {
			return url + "/upload/pdf/" + documentId;
		},
		GET_IMAGE_PATH_DATA : function(ProfilePicimagePath) {
			return url + "/upload/image/" + ProfilePicimagePath;
		},
		GET_USER_IMAGEPATHDATA : function(loggedUsername) {
			return url + "/upload/image/" + loggedUsername;
		},
		GET_ALL_PATIENTS_BY_ROLE : function(username) {
			return url + "/patient/getAllByRole/" + username;
		},
		DELETE_PATIENT_GOALS_BY_ID : function(patientId, goalId) {
			return url + "/deletePatientGoalById/" + patientId + "/" + goalId;
		},
		GET_ALL_PATIENT_GOALS_BY_PATIENT_ID:function(patientId){
			return url + "/getAllPatientGoalsByPatient/" + patientId;
		},
		CHARGE_FOR_TRANSACTION:function(){
			return url+ "/payment/charge";
		}

	};
};
angular.module("HealthApplication").constant("PATIENT_MODULE_CONFIG",
		PatientModuleConstants());
