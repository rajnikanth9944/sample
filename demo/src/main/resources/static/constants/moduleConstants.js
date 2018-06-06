function ModuleConstants() {
	var protocol = "http";
	
	var host = "ec2-13-232-34-50.ap-south-1.compute.amazonaws.com";
    var port = 8080;

	var url = protocol + "://" + host + ":" + port;
	return {
		PROTOCOL : protocol,
		HOST : host,
		PORT : port,
		URL : url,
		LOGIN : function() {
			return url + "/login";
		},
		DOSIGNUP : function() {
			return url + "/registration";
		},
		GETALLSTATES:function(){
			return url + "/allStates";
		},
		GETALLSTATESBYSEARCH:function(stateName){
			return url + "/searchallStates?term="+stateName;
		},
 		GETALLCOUNTRY:function(){
			return url + "/allCountry";
		},
		GETALLCOUNTRYBYSEARCH:function(countryName){
			return url + "/searchallCountry?term="+countryName;
		},
		FORGOTPASSWORD : function(email) {
			return url + "userForgotPassword/" + email;
		},
		CHANGEPASSWORD : function() {
			return url + "changePassword";
		},
		VALIDATE_OTP : function() {
			return url + "validateOTP";
		},
		GETALLCOUNTRIES : function() {
			return url + "getAllCountries";
		},
		GETALLSTATESBYCOUNTRYID : function(id) {
			return url + "getAllStatesBy/" + id;
		},
		GETALLCITIESBYSTATEID : function(id) {
			return url + "getAllCitiesBy/" + id;
		},
		ADD_CLIENTTYPE : function() {
			return url + "saveClientType";
		},
		GETALLCLIENTSLIST : function(page, size) {
			return url + "getAllClientTypes?page=" + page + "&size=" + size;
		},
		GETALLCLIENTS : function() {
			return url + "getAllClientTypesList";
		},
		UPDATECLIENT : function() {
			return url + "updateClientType";
		},
		DELETECLIENTTYPE : function(id) {
			return url + "deleteClientType/" + id;
		},
		ADD_ROLETYPE : function() {
			return url + "saveRole/";
		},

		GETALLROLES : function() {
			return url + "getAllRoles/";
		},
		UPDATEROLE : function() {
			return url + "updateRole/";
		},
		DELETEROLE : function(id) {
			return url + "deleteRole/" + id;
		},
		ADDCOMPANYTYPE : function() {
			return url + "saveCompanyType/";
		},
		GETALLCOMPANIES : function() {
			return url + "getAllCompanyTypesList";
		},
		GETALLCOMPANIESLIST : function(page, size) {
			return url + "getAllCompanyTypes?page=" + page + "&size=" + size;
		},
		UPDATECOMPANYTYPE : function() {
			return url + "updateCompanyType/";
		},
		DELETECOMPANYTYPE : function(id) {
			return url + "deleteCompanyType/" + id;
		},
		ADDSUBSCRIPTIONMASTER : function() {
			return url + "saveSubscriptionMaster/";
		},
		GETALLSUBSCRIPTIONMASTERS : function(page, size) {
			return url + "getAllSubscriptionMasters?page=" + page + "&size="
					+ size;
		},
		GETALLSUBSCRIPTIONMASTERSLIST : function() {
			return url + "getAllSubscriptionMastersList";
		},
		UPDATESUBSCRIPTIONMASTER : function() {
			return url + "updateSubscriptionMaster/";
		},
		DELETESUBSCRIPTIONMASTER : function(id) {
			return url + "deleteSubscriptionMaster/" + id;
		},
		ADDCATEGORY : function() {
			return url + "saveCategory/";
		},

		GETALLCATEGORIES : function() {
			return url + "getAllCategorys/";
		},
		UPDATECATEGORY : function() {
			return url + "updateCategory/";
		},
		DELETECATEGORY : function(id) {
			return url + "deleteCategory/" + id;
		},
		ADDPACKAGESUBSCRIPTION : function() {
			return url + "savePackageSubscription/";
		},

		GETALLPACKAGESUBSCRIPTIONS : function(page, size) {
			return url + "getAllPackageSubscriptions?page=" + page + "&size="
					+ size;
		},
		UPDATEPACKAGESUBSCRIPTION : function() {
			return url + "updatePackageSubscription/";
		},
		DELETEPACKAGESUBSCRIPTION : function(id) {
			return url + "deletePackageSubscription/" + id;
		},
		ADDPACKAGEPRICING : function() {
			return url + "savePackagePriceMaster/";
		},

		GETALLPACKAGEPRICINGS : function(page, size) {
			return url + "getAllPackagePriceMasters?page=" + page + "&size="
					+ size;
		},
		UPDATEPACKAGEPRICING : function() {
			return url + "updatePackagePriceMaster/";
		},
		DELETEPACKAGEPRICING : function(id) {
			return url + "deletePackagePriceMaster/" + id;
		},
		ADD_DEPARTMENT : function() {
			return url + "saveDepartmet/";
		},
		GETALLDEPARTMENTSLIST : function(page, size) {
			return url + "getAllDepartmets?page=" + page + "&size=" + size;
		},
		GETALLDEPARTMENT : function() {
			return url + "getAllDepartmetsList";
		},
		UPDATEDEPARTMENT : function() {
			return url + "updateDepartmet/";
		},
		DELETEDEPARTMENT : function(id) {
			return url + "deleteDepartmet/" + id;
		},
		ADD_PACKAGEMASTER : function() {
			return url + "savePackageMaster/";
		},
		GETALLPACKAGEMASTER : function(page, size) {
			return url + "getAllPackageMastersPage?page=" + page + "&size=" + size;
		},
		GETALLPACKAGEMASTERSLIST : function() {
			return url + "getAllPackageMastersList";
		},
		UPDATEPACKAGEMASTER : function() {
			return url + "updatePackageMaster/";
		},
		DELETEPACKAGEMASTER : function(id) {
			return url + "deletePackageMaster/" + id;
		},
		ADD_PACKAGEDISCOUNT : function() {
			return url + "savePackageDiscount/";
		},
		GETALLPACKAGEDISCOUNT : function() {
			return url + "getAllPackageDiscounts/";
		},
		UPDATEPACKAGEDISCOUNT : function() {
			return url + "updatePackageDiscount/";
		},
		DELETEPACKAGEDISCOUNT : function(id) {
			return url + "deletePackageDiscount/" + id;
		},
		ADD_USER : function() {
			return url + "saveUser/";
		},
		GETALLUSERS : function(adminUserName) {
			return url + "getAllPersons/" + adminUserName;
		},
		GETALLUSERSPAGE : function(adminUserName, page,size) {
			return url + "getAllPersonsPage/" + adminUserName+ "?page=" + page + "&size=" + size;
		},
		GETALLREGISTRATIONS : function(adminUserName) {
			return url + "getAllRegistrations/" + adminUserName;
		},
		GET_ALL_ACTIVE_ADMINS : function(adminUserName) {
			return url + "getAllActiveAdmins/" + adminUserName;
		},
		GET_ALL_INACTIVE_ADMINS : function(adminUserName) {
			return url + "getAllInActiveAdmins/" + adminUserName;
		},
		GET_APPOINTMENTS_COUNT_BY_ROLE : function(adminUserName) {
			return url + "getAllAppointmentsCountByRole/" + adminUserName;
		},
		UPDATESUBAPPOINTMENTSTATUS:function(id,status) {
			return url + "updateSubappointmentStatus/"+id+"/"+status;
		},
		GET_TODAY_SUBAPPOINTMENTS:function(adminUserName){
			return url + "getTodaySubAppointments/" + adminUserName;
		},
		GET_ALL_ACTIVE_SITEADMIN : function(adminUserName) {
			return url + "getAllActiveSiteAdmins/" + adminUserName;
		},
		GET_ALL_INACTIVE_SITEADMIN : function(adminUserName) {
			return url + "getAllInActiveSiteAdmins/" + adminUserName;
		},
		UPDATEUSER : function() {
			return url + "updatePerson/";
		},
		DELETEUSER : function(id) {
			return url + "deletePerson/" + id;
		},
		GETALLROLESBASEDONSTATUS : function() {
			return url + "getAllRolesByStatus";
		},
		ADDSITE : function() {
			return url + "saveSite/";
		},

		GETALLSITES : function() {
			return url + "getAllSites/";
		},
		UPDATESITE : function() {
			return url + "updateSite/";
		},
		DELETESITE : function(id) {
			return url + "deleteSite/" + id;
		},
		GETALLSITESBYCOMPANYID : function() {
			return url + "getAllSitesByCompany/" + id;
		},
		GETALLSITESBYCOMPANYUSERNAME : function(companyAdminUsername) {
			return url + "getAllSitesByCmpanyUserName/" + companyAdminUsername;
		},

		GETALLSITESBYCOMPANYUSERNAMEPAGE : function(companyAdminUsername, page,
				size) {
			return url + "getAllSitesByCmpanyUserNamePage/"
					+ companyAdminUsername + "?page=" + page + "&size=" + size;
		},
		GETALLSITESBYCOMPANYUSERNAMEANDSTATUS : function(companyAdminUsername) {
			return url + "getAllSitesByCmpanyUserNameAndStatus/"
					+ companyAdminUsername;
		},
		ADD_PERMISSION : function() {
			return url + "savePermission";
		},
		UPDATE_PERMISSION : function() {
			return url + "updatePermission";
		},
		GETALLPERMISSIONS : function() {
			return url + "getAllPermissions";
		},
		GET_COMPANY_USER : function(username) {
			return url + "getCompanyUser/" + username;
		},
		UPDATE_COMPANY_USER : function() {
			return url + "updateCompanyUser/";
		},
		ADDEVALUTIONCATEGORY : function() {
			return url + "saveQuestionCategory/";
		},
		GETALLEVALUTIONCATEGORIES : function() {
			return url + "getAllQuestionCategorys/";
		},
		GET_ALL_QUESTION_CATEGORYS_BY_PATIENT_ID : function(patientid) {
			return url + "getAllCategorysByPatientId/" + patientid;
		},
		GETALLLISTEVALUTIONCATEGORIES : function() {
			return url + "getAllListQuestionCategorys/";
		},
		GETALLCATEGORY : function() {
			return url + "findAllQuestionCategorys";
		},
		UPDATEEVALUTIONCATEGORY : function() {
			return url + "updateQuestionCategory/";
		},
		DELETEEVALUTIONCATEGORY : function(id) {
			return url + "deleteQuestionCategory/" + id;
		},
		ADDQUESTION : function() {
			return url + "saveQuestion/";
		},
		GETALLQUESTIONS : function() {
			return url + "getAllQuestions/";
		},
		UPDATEQUESTION : function() {
			return url + "updateQuestion/";
		},
		DELETEQUESTION : function(id) {
			return url + "deleteQuestion/" + id;
		},
		GETALLPERMISSIONSBY : function(id) {
			return url + "getAllPermissionsByRole/" + id;
		},
		ASSIGFEATURETOROLE : function() {
			return url + "assigFeaturesToRole";
		},
		GETALLEVALUTIONQUESTIONSBYCATEGORYID : function(id) {
			return url + "getAllEvalutionQuestionsByCategory/" + id;
		},
		UPDATEROLEFEATURE : function() {
			return url + "updateRoleFeatures";
		},
		GETPACKAGEPRICING : function(id) {
			return url + "getPackagePriceMaster/" + id;
		},
		ADDHOLIDAYS : function() {
			return url + "saveHolidays/";
		},
		UPDATEHOLIDAYS : function() {
			return url + "updateHolidays/";
		},
		DELETEHOLIDAYS : function(id) {
			return url + "deleteHolidays/" + id;
		},
		GETALLHOLIDAYS : function() {
			return url + "getAllHolidays/";
		},
		ADDTHERAPIST : function() {
			return url + "saveTherapist/";
		}, 
		GETALLTHERAPISTS : function(adminUsername) {
			return url + "getAllTherapists/" + adminUsername;
		},
		GETALLACTIVETHERAPISTS : function(adminUsername) {
			return url + "getAllActiveTherapists/" + adminUsername;
		},
		GETALLINACTIVETHERAPISTS : function(adminUsername) {
			return url + "getAllInActiveTherapists/" + adminUsername;
		},
		UPDATETHERAPIST : function() {
			return url + "updateTherapist/";
		},
		DELETETHERAPIST : function(id) {
			return url + "deleteTherapist/" + id;
		},
		GETTHERAPISTBYUSERNAME : function(adminUsername) {
			return url + "getTherapistByUsername/" + adminUsername;
		},
		ADDSCHEDULE : function() {
			return url + "saveSchedule/";
		},
		GETALLSCHEDULES : function() {
			return url + "getAllSchedules";
		},
		GETALLSCHEDULESBYDOCTORUSERNAMEPAGE : function(adminUsername,page,size) {
			return url + "getAllSchedulesByDoctorUsernameByPagination/" + adminUsername+ "?page="
			+ page + "&size=" + size;
		},
		GETALLSCHEDULESBYDOCTORUSERNAME : function(adminUsername) {
			return url + "getAllSchedulesByDoctorUsername/" + adminUsername;
		},
		
		GETALLTHERAPISTSSCHEDULESBYROLE : function(adminUsername) {
			return url + "getAllSchedulesByRole/" + adminUsername;
		},
		UPDATESCHEDULE : function(id) {
			return url + "updateSchedule";
		},
		DELETESCHEDULE : function(id) {
			return url + "deleteSchedule/" + id;
		},
		GETCOUNTRYBASEDONISDCODE : function() {
			return url + "getCountrys";
		},
		GETALLHOLIDAYSBYDOCTORUSERNAME : function(doctorUsername) {
			return url + "getAllHolidaysByDoctorUsername/" + doctorUsername;
		},
		GETALLHOLIDAYSBYDOCTORUSERNAMEPAGE : function(doctorUsername,page,size) {
			return url + "getAllHolidaysByDoctorUsernameByPagination/" + doctorUsername + "?page="
			+ page + "&size=" + size;;
		},
		GET_ALL_SCHEDULES_BY_USER_ROLE : function(usrername) {
			return url + "getAllSchedulesByRole/" + usrername;
		},
		ADDTEMPLATE : function() {
			return url + "saveEvalutionTemplate/";
		},
		GETALLTEMPLATES : function() {
			return url + "getAllEvalutionTemplate";
		},
		DELETETEMPLATE : function(id) {
			return url + "deleteEvalutionTemplate/" + id;
		},
		ADDGOALTEMPLATE : function() {
			return url + "saveGoalTemplateLookup/";
		},
		GETALLGOALTEMPLATES : function() {
			return url + "getAllGoalTemplateLookups";
		},
		GET_ALL_GOAL_TEMPLATES_BY_PATIENT_ID : function(patientid) {
			return url + "getAllGoalTemplateLookupsByPatient/"+patientid;
		},
		UPDATEGOALTEMPLATE : function() {
			return url + "updateGoalTemplateLookup/";
		},
		DELETEGOALTEMPLATE : function(id) {
			return url + "deleteGoalTemplateLookup/" + id;
		},
		GETALLANSWERSBYQUESIONID : function(id) {
			return url + "getAllAnswersByQuestionId/" + id;
		},
		ADDANSWER : function() {
			return url + "saveAnswer/";
		},
		ADDAPPOINTMENT : function() {
			return url + "saveAppointment/";
		},
		UPDATEAPPOINTMENT : function() {
			return url + "updateAppointment/";
		},
		DELETEAPPOINTMENT : function(id) {
			return url + "deleteAppointmentById/" + id;
		},
		GET_APPOINTS_BY_ROLE : function(adminUserName) {
			return url + "getAppointmentssByRole/" + adminUserName;
		},
		GET_APPOINTS_BY_ROLE_PAGE : function(adminUserName,page,size) {
			return url + "getAppointmentssByRoleByPagination/" + adminUserName + "?page="
			+ page + "&size=" + size;
		},
		GETAPPOINTMENTLISTBYBETWEENDATES : function(page,size) {
			return url + "getAppointmentListBetweenDates/?page="
			+ page + "&size=" + size;
		},
		GETALLTHERAPISTSBYDEPARTMENT : function(id) {
			return url + "getAllTherapistsByDepartment/" + id;
		},
		GETALLHOLIDAYSBYROLE : function(username) {
			return url + "getAllHolidaysByRole/" + username;
		},
		GET_ALL_REGISTERED_COMPANIES : function() {
			return url + "registeredCompanies";
		},
		GETALLSCHEDULESBYTODAYDATE:function(){
			return url + "getschedulesBytoday";
		},
		SEARCH_SCHEDULES_BY_TODAYDATE:function(){
			return url + "searchSchedulesByDay";
		},
		GET_ALL_SUB_APPOINTS_BY_ROLE:function(adminUserName){
			return url + "getAllSubAppointmentssByRole/" + adminUserName;
		},
		GET_SCHEDULED_HOURS:function(){
			return url+ "getScheduledHours";
		},
		GET_ALL_SUB_APPOINTS_BY_ROLE_FOR_CALENDARVIEW:function(adminUserName){
			return url + "getAllSubAppointmentssByRoleforCalendarView/" + adminUserName;
		},
		IS_EMAIL_EXISTS:function(email){
			return url + "isEmailExists/"+ email;
		},
		IS_NPI_EXISTS:function(npi){
			return url+ "isNpiNumberExists/"+npi;
		},
		IS_SSN_EXISTS:function(ssn){
			return url+ "isSSNNumberExists/"+ssn;
		},
		IS_UCI_EXISTS:function(uci){
			return url+ "isUCINumberExists/"+uci;
		},
		IS_MOBILE_NUMBER_EXISTS:function(mobileNumber){
            return url+ "ismobileNumberExists/"+mobileNumber;
        },
        GET_ALL_GOALTEMPLATES_BY_STATUS:function(status){
        	 return url+ "getAllGoalTemplateLookupsByStatus/"+status;
        },
        ASSIGN_GOALS_TO_PATIENT:function(patientId){
        	 return url+ "assignGoalsToPatientById/"+patientId;
        },
        GET_PACKAGEPRICEMASTER_INFO:function(subscriptionName, packagename){
        	 return url+ "getPackagePriceMasterInfo/"+subscriptionName+"/"+packagename;
        }
		

	};
}
angular.module("HealthApplication")
		.constant("MODULE_CONFIG", ModuleConstants());
