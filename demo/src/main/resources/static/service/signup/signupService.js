function signupService(MODULE_CONFIG, $http) {
   this.doSignUp = function(user) {
    return $http.post(MODULE_CONFIG.DOSIGNUP(), user);
  };
  this.getAllStates = function() {
	    return $http.get(MODULE_CONFIG.GETALLSTATES());
	  };
	
	  this.searchAllStates = function(statename) {
		    return $http.get(MODULE_CONFIG.GETALLSTATESBYSEARCH(statename));
		  };
		  
		  this.getAllCountry = function() {
			    return $http.get(MODULE_CONFIG.GETALLCOUNTRY());
			  };
			
			  this.searchAllCountry = function(countryname) {
				    return $http.get(MODULE_CONFIG.GETALLCOUNTRYBYSEARCH(countryname));
				  };
	  
  
}

angular.module("HealthApplication").service("signupService", signupService);
