function siteService(MODULE_CONFIG, $http) {
	this.addSite = function(site) {
	return 	$http.post(MODULE_CONFIG.ADDSITE(),site);
	};
	this.getAllSites=function(){
		return $http.get(MODULE_CONFIG.GETALLSITES());
	};
	this.updateSite=function(site){
		return $http.put(MODULE_CONFIG.UPDATESITE(),site);
	};
	this.deleteSite=function(id){
		return $http.delete(MODULE_CONFIG.DELETESITE(id));
	};
	
	this.getAllSitesByCompanyId=function(){
		return $http.get(MODULE_CONFIG.GETALLSITESBYCOMPANYID(id));
	};
	
	this.getAllSitesByCompanyUserNamePage=function(companyAdminUsername,page,size){
		return $http.get(MODULE_CONFIG.GETALLSITESBYCOMPANYUSERNAMEPAGE(companyAdminUsername,page,size));
	};
	
	this.getAllSitesByCompanyUserNameAndStatus=function(companyAdminUsername){
		return $http.get(MODULE_CONFIG.GETALLSITESBYCOMPANYUSERNAMEANDSTATUS(companyAdminUsername));
	};
	
}

angular.module('HealthApplication').service('siteService', siteService);





