function signupCtrl($scope, $state, signupService, $rootScope, 
		$http, $stateParams,PATIENT_MODULE_CONFIG,$timeout, $q, $log) {
	$scope.userDto = {};
	$scope.userObj = {};
	$scope.user = {};
	$scope.packagePricing1 = {};
	$scope.companyType = {};
	$scope.hidetag = false;
	$scope.nextTag = false;
	$scope.userPackage = {};
	$scope.companyType = {};
	if ($stateParams.signupUser != undefined) {
		$scope.userObj = $stateParams.signupUser;
	}
	;

	$scope.doSignUp = function() {
		signupService
				.doSignUp($scope.userDto)
				.then(
						function(response) {
							toastr.options = {
								closeButton : true,
								progressBar : true,
								showMethod : 'slideDown',
								positionClass : "toast-top-full-width",
								timeOut : 5000
							};
							toastr
									.success('',
											'Registration is Successfully');

							$state.go('login');
						},
						function(error) {
							
						});
	};
	
	$scope.gotoLogin = function() {
		$state.go('login');
	}


	$scope.$on('loader_show', function(event, args) {
		$rootScope.loader = true;
	});
	$scope.$on('loader_hide', function(event, args) {
		$rootScope.loader = false;
	});

	$scope.selectedStates=[];
	$scope.selectedCountries=[];

		      $scope.searchAllStates=function(){
		    	  $scope.selectedStates=[];
		    	  signupService.searchAllStates($scope.search).then(function(response){
		    		  $scope.statesListBySearch	 = response.data;
		    		  angular.forEach($scope.statesListBySearch,function(state){
		    			  $scope.selectedStates.push(state.name);
		    		  })
		    	  },function(error){
		    		  
		    	  })
		      }
		      
		      $scope.searchAllCountry=function(){
		    	  $scope.selectedCountries=[];
		    	  signupService.searchAllCountry($scope.searchs).then(function(response){
		    		  $scope.countryListBySearch	 = response.data;
		    		  angular.forEach( $scope.countryListBySearch,function(country){
		    			  for(i=0;i<$scope.selectedStates.length;i++) { 
		    				  if ($scope.selectedStates[i] == country.name) {
		    					  $scope.selectedCountries.push(country.name);
		    					 // console.log("  $scope.selectedCountries"+  $scope.selectedCountries);
		    				  }
		    				}
		    		  })
		    	  },function(error){
		    		  
		    	  })
		      };
		      
		      
				$scope.fillTextbox=function(string){
					$scope.search=string;
					$scope.statesListBySearch=null;
				};
				
				$scope.fillTextboxForCountry=function(string){
					$scope.searchs=string;
					$scope.countryListBySearch=null;
				};
				
				
		      
		      
		    }

		    

angular.module("HealthApplication").controller("signupCtrl", signupCtrl);