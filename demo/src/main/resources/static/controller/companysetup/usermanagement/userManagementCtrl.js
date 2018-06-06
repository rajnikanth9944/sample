//angular.module('HealthApplication').constant('MODULE_CONFIG', ModuleConstants());
function userManagementCtrl($scope, $state, userManagementSerrvice,
		siteService, therapistService, roleService, departmentService,
		countryService, $rootScope, $stateParams, companyService,PATIENT_MODULE_CONFIG) {
	$scope.page = 0;
	$scope.size = 5;
	$scope.addUser = {};
	
	$scope.user = $stateParams.userObj;
	
	
	$scope.getImagePathData = function(ProfilePicimagePath) {
		return PATIENT_MODULE_CONFIG.GET_IMAGE_PATH_DATA(ProfilePicimagePath);
	};
	
	$scope.fileChanged = function(files) {
		if (files != null) {
			var file = files[0];
			$scope.filepath = files[0];
			companyService.uploadImage($scope.filepath).then(
					function(response) {
						$scope.addUser.signaturePath = response.data.imagePath;
						$scope.imageUrl = $scope.addUser.signaturePath;
						//$scope.getImagePathData($scope.user.signaturePath);
					}, function(eror) {
					});
		}
	};
	$scope.updateFileChanged = function(files) {
		if (files != null) {
			var file = files[0];
			$scope.filepath = files[0];
			companyService.uploadImage($scope.filepath).then(
					function(response) {
						$scope.user.signaturePath = response.data.imagePath;
						$scope.imageUrl = $scope.user.signaturePath;
						//$scope.getImagePathData($scope.user.signaturePath);
					}, function(eror) {
					});
		}
	};

	
	$scope.addUserFunction = function() {
		$scope.addUser.adminUserName = $rootScope.loggedUsername;
		userManagementSerrvice.addUser($scope.addUser).then(function(response) {
			toastr.options = {
					closeButton : true,
					progressBar : true,
					showMethod : 'slideDown',
					positionClass : "toast-top-full-width",
					timeOut : 3000
				};
				toastr.success('', 'User Registration Successfully And Send Mail to Registered MailId!');
			$state.go('main.usermanagement_list');
		}, function(error) {
		});
	};
	$scope.getAllusers = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		userManagementSerrvice.getAllusers($scope.adminUserName).then(
				function(response) {
					$scope.userList = response.data;

				}, function(error) {
				});
	};
	////////
	
	$scope.changeMobileNumber=function(mobileNumber){
		var currentNumber= mobileNumber.toString(); 
		changedNumber = "("+currentNumber.substring(0,3) + ")" + currentNumber.substring(3,6) + "-" +currentNumber.substring(6,10);
		return changedNumber;
	}
	$scope.getAllusersPage = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		userManagementSerrvice.getAllusersPage($scope.adminUserName,$scope.page, $scope.size).then(
				function(response) {
					$scope.userLists = response.data.content;
					$scope.totalElements = response.data.totalElements;
					$scope.totalPages = response.data.totalPages-1;
					$scope.noOfPgaes(response.data.totalPages);
				}, function(error) {
				});
	};
	//////////////
	
	$scope.getAllRegistrations = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		userManagementSerrvice.getAllRegistrations($scope.adminUserName).then(
				function(response) {
					$scope.userList = response.data;

				}, function(error) {
				});
	};
	$scope.getTherapistByUsername = function() {
		therapistService.getTherapistByUsername($scope.user.email).then(
				function(response) {
					$scope.user = response.data;
					$scope.getAllStatesByCountryId($scope.user.countryName.id);
					$scope.getAllCitiesByStateId($scope.user.stateName.id);
				}, function(error) {

				})
	};
	$scope.getAllSitesByCompanyUserName = function() {
		// $scope.companyAdminUsername= $rootScope.loggedUsername;
		siteService.getAllSitesByCompanyUserName($rootScope.loggedUsername)
				.then(function(response) {
					$scope.siteList = response.data;
					// $scope.getAllStatesByCountryId($scope.site.address.country.id);
					// $scope.getAllCitiesByStateId($scope.site.address.state.id);
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};

	$scope.getAllSitesByCompanyUserNameAndStatus = function() {
		siteService.getAllSitesByCompanyUserNameAndStatus(
				$rootScope.loggedUsername).then(function(response) {
			$scope.siteList = response.data;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};

	$scope.getAllRoles = function() {
		roleService.getAllRoles().then(function(response) {
			$scope.allrolesList = response.data;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};

	$scope.getAllRolesBasedOnStatus = function() {
		roleService.getAllRolesBasedOnStatus().then(function(response) {
			$scope.rolesList = response.data;

			angular.forEach($scope.rolesList, function(role) {
				if (role.roleName == $rootScope.loggedUserRole) {
					var index = $scope.rolesList.indexOf(role);
					$scope.rolesList.splice(index, 1);
				}
			})

		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};

	$scope.removeIt = function(i) {
		$scope.rolesList.splice(1, 1)
	};
	$scope.updateUser = function(user) {
		userManagementSerrvice.updateUser(user).then(function(response) {
			toastr.options = {
					closeButton : true,
					progressBar : true,
					showMethod : 'slideDown',
					positionClass : "toast-top-full-width",
					timeOut : 3000
				};
				toastr.success('', 'Updated User Successfully ');
			$state.go('main.usermanagement_list');
		}, function(error) {
		});
	};
	$scope.deleteUser = function(id) {
		userManagementSerrvice.deleteUser(id).then(function(response) {
			toastr.options = {
					closeButton : true,
					progressBar : true,
					showMethod : 'slideDown',
					positionClass : "toast-top-full-width",
					timeOut : 3000
				};
				toastr.success('', 'Deleted User Successfully ');
			$state.go('main.usermanagement_list');
			$scope.getAllusersPage();
		}, function(error) {
		});
	};
	$scope.getAllCountries = function() {
		countryService.getAllCountries().then(function(response) {
			$scope.countriesList = response.data;
			$scope.getAllStatesByCountryId($scope.user.address.country.id);
			$scope.getAllCitiesByStateId($scope.user.address.state.id);
		}, function(error) {

		})
	};
	
	$scope.getCountrysBasedOnIsdCode = function() {
		countryService.getCountrysBasedOnIsdCode().then(function(response) {
			$scope.countriesList = response.data;
			$scope.getAllStatesByCountryId($scope.user.address.country.id);
			$scope.getAllCitiesByStateId($scope.user.address.state.id);
		}, function(error) {

		})
	};
	$scope.getCountrysByIsdCode = function() {
		countryService.getCountrysBasedOnIsdCode().then(function(response) {
			$scope.countriesList = response.data;
		}, function(error) {

		})
	};
	$scope.getAllStatesByCountryId = function(id) {
		countryService.getAllStatesByCountryId(id).then(function(response) {
			$scope.statesList = response.data;
		}, function(error) {

		})
	};

	 var arr = new Array();
		$scope.getAllCitiesByStateId = function(id) {
			countryService.getAllCitiesByStateId(id).then(function(response) {
				$scope.citiesList = response.data;
				angular.forEach($scope.citiesList, function (city) {
	                arr.push({ name: city.name });
	            });
	            $scope.cities = arr;
				return  $scope.cities;
			}, function(error) {

			})
		};
	$scope.getAllDepartments = function() {
		departmentService.getAlldepartments().then(function(response) {
			$scope.departmentsList = response.data;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
////////
	// Pagination logic

	$scope.noOfPgaes=function(totalpages){
		
		$scope.pageList=[];
		for(i=0;i<totalpages;i++){
			$scope.pageList.push(i);
		}
		
	   };
	
	   $scope.pageChanged=function(page){
		$scope.page=page;
	   };
	   
	   $scope.sizeChanged=function(size){
			$scope.size=size;
		};
		$scope.firstPage = function() {
			$scope.page = 0;
		};
		
		$scope.lastPage = function() {
			$scope.page = $scope.totalPages;
		};

		$scope.previousPage = function() {
			if ($scope.page >0) {
				$scope.page = $scope.page - 1;
			}
		};
		$scope.nextPage = function() {
			if ($scope.page < $scope.totalPages) {
				$scope.page = $scope.page + 1;
			}
		};
		$scope.$watchGroup(['size','page'],
				function(oldSize, oldPage) {
					$scope.getAllusersPage();
				});
		
////////
	$scope.gotoList = function() {

		$state.go('main.usermanagement_list');
	};
	$scope.gotoAdd = function() {
		$state.go('main.add_usermanagement');
	};
	$scope.gotoback = function() {
		$state.go('main.usermanagement_list');
	};
	$scope.gotoupdate = function(user) {
		$state.go('main.updateUserMangement', {
			userObj : user
		});
	};
	
	//get all registered companies
	$scope.getAllRegisteredCompanies=function(){
		userManagementSerrvice.getAllRegisteredCompanies().then(function(response){
			$scope.registeredCompanies=response.data;
		},function(error){
			
		})
	}
}
angular.module("HealthApplication").controller("userManagementCtrl",
		userManagementCtrl);
