function departmentService(MODULE_CONFIG, $http) {
	this.addDepartment = function(department) {
	return 	$http.post(MODULE_CONFIG.ADD_DEPARTMENT(),department);
	};
	this.getAlldepartments=function(){
		return $http.get(MODULE_CONFIG.GETALLDEPARTMENT());
	};
	this.getAlldepartmentsList=function(page, size){
		return $http.get(MODULE_CONFIG.GETALLDEPARTMENTSLIST(page, size));
	};
	this.updateDepartment=function(department){
		return $http.put(MODULE_CONFIG.UPDATEDEPARTMENT(),department);
	};
	this.deleteDepartment=function(id){
		return $http.delete(MODULE_CONFIG.DELETEDEPARTMENT(id));
	};
	/*this.findAllDepartments = function(page, size) {
		return $http.get(PATIENT_MODULE_CONFIG.FIND_ALL_DEPARTMENTS(page, size));
	};*/
}
angular.module('HealthApplication').service('departmentService', departmentService);