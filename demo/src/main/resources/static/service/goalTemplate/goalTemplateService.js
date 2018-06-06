function goalTemplateService(MODULE_CONFIG, $http) {
	this.addGoal = function(goal) {
		return $http.post(MODULE_CONFIG.ADDGOALTEMPLATE(),goal);
	};
	this.getAllgoals = function() {
		return $http.get(MODULE_CONFIG.GETALLGOALTEMPLATES());
	};
	this.getAllgoalsByPatient_Id = function(patientid) {
		return $http.get(MODULE_CONFIG.GET_ALL_GOAL_TEMPLATES_BY_PATIENT_ID(patientid));
	};
	this.updateGoal=function(goal){
		
		return $http.put(MODULE_CONFIG.UPDATEGOALTEMPLATE(),goal);
	};
	this.deleteGoal=function(id){
		return $http.delete(MODULE_CONFIG.DELETEGOALTEMPLATE(id));
	};
	this.getAllGoalsByStatus=function(status){
		return $http.get(MODULE_CONFIG.GET_ALL_GOALTEMPLATES_BY_STATUS(status));
	}
}

angular.module('HealthApplication').service('goalTemplateService', goalTemplateService);