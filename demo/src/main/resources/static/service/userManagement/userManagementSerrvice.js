function userManagementSerrvice(MODULE_CONFIG, $http) {
	
	this.addUser= function(user) {
	return 	$http.post(MODULE_CONFIG.ADD_USER(),user);
	};
	this.getAllusers=function(adminUserName){
		return $http.get(MODULE_CONFIG.GETALLUSERS(adminUserName));
	};
	this.getAllusersPage=function(adminUserName,page,size){
		return $http.get(MODULE_CONFIG.GETALLUSERSPAGE(adminUserName,page,size));
	};
	this.updateUser=function(user){
		return $http.put(MODULE_CONFIG.UPDATEUSER(),user);
	};
	this.deleteUser=function(id){
		return $http.delete(MODULE_CONFIG.DELETEUSER(id));
	};
	this.getAllRegistrations=function(adminUserName){
		return $http.get(MODULE_CONFIG.GETALLREGISTRATIONS(adminUserName));
	};
	
	this.getAllRegisteredCompanies=function(){
		return $http.get(MODULE_CONFIG.GET_ALL_REGISTERED_COMPANIES());
	};
	
	
}
angular.module('HealthApplication').service('userManagementSerrvice', userManagementSerrvice);