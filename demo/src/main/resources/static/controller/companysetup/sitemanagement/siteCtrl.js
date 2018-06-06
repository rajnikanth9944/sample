//angular.module('HealthApplication').constant('MODULE_CONFIG', ModuleConstants());
function siteCtrl($scope, $state, siteService, $rootScope, $stateParams,
		countryService) {

	$scope.page = 0;
	$scope.size = 5;
	$scope.site = {}

	$scope.updateSiteObj = $stateParams.siteObj;
	$scope.addSite = function(site) {
		$scope.site.companyAdminUsername = $rootScope.loggedUsername;
		siteService.addSite(site).then(function(response) {
			toastr.options = {
				closeButton : true,
				progressBar : true,
				showMethod : 'slideDown',
				positionClass : "toast-top-full-width",
				timeOut : 2000
			};
			toastr.success('', ' Data Added Successfully');
			$state.go('main.siteList');
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};

	$scope.getAllSitesByCompanyUserName = function() {
		siteService.getAllSitesByCompanyUserName($rootScope.loggedUsername)
				.then(function(response) {
					$scope.siteList = response.data;
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};
	
	
	$scope.getAllSitesByCompanyUserNamePage = function() {
		siteService.getAllSitesByCompanyUserNamePage($rootScope.loggedUsername,$scope.page, $scope.size)
				.then(function(response) {
					$scope.siteLists = response.data.content;
					$scope.totalElements = response.data.totalElements;
					$scope.totalPages = response.data.totalPages-1;
					$scope.noOfPgaes(response.data.totalPages);
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};
	
	$scope.getAllSitesByCompanyUserNameAndStatus = function() {
		siteService.getAllSitesByCompanyUserNameAndStatus($rootScope.loggedUsername)
				.then(function(response) {
					$scope.siteList = response.data;
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};

	$scope.getCountrysBasedOnIsdCode = function() {
		countryService.getCountrysBasedOnIsdCode().then(function(response) {
			$scope.countriesList = response.data;
		}, function(error) {

		})
	};

	$scope.getCountrysBasedOnIsdCodeInUpdate = function() {
		countryService.getCountrysBasedOnIsdCode().then(function(response) {
			$scope.countriesList = response.data;
			$scope.getAllStatesByCountryId($scope.updateSiteObj.address.country.id);
			$scope.getAllCitiesByStateId($scope.updateSiteObj.address.state.id);
		}, function(error) {

		})
	};

	$scope.getAllCountries = function() {
		countryService.getAllCountries().then(function(response) {
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

	$scope.getAllCitiesByStateId = function(id) {
		countryService.getAllCitiesByStateId(id).then(function(response) {
			$scope.citiesList = response.data;
		}, function(error) {

		})
	};

	$scope.getAllSites = function() {
		siteService.getAllSites().then(function(response) {
			$scope.siteList = response.data;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};

	$scope.updateSite = function(site) {
		siteService.updateSite(site).then(function(response) {
			toastr.options = {
				closeButton : true,
				progressBar : true,
				showMethod : 'slideDown',
				positionClass : "toast-top-full-width",
				timeOut : 2000
			};
			toastr.success('', ' Data Updated Successfully');
			$state.go('main.siteList');
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};

	$scope.deleteSite = function(id) {
		siteService.deleteSite(id).then(function(response) {
			toastr.options = {
				closeButton : true,
				progressBar : true,
				showMethod : 'slideDown',
				positionClass : "toast-top-full-width",
				timeOut : 2000
			};
			toastr.success('', ' Data Deleted Successfully');
			$scope.getAllSitesByCompanyUserNamePage();
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	
	
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
					$scope.getAllSitesByCompanyUserNamePage();
				});
		
		
	$scope.gotoList = function() {
		$state.go('main.siteList');
	};
	$scope.gotoAdd = function() {
		$state.go('main.addSite');
	};
	$scope.gotoback = function() {
		$state.go('main.siteList');
	};
	$scope.gotoupdate = function(site) {
		$state.go('main.updateSite', {
			siteObj : site
		});
	};
}
angular.module("HealthApplication").controller("siteCtrl", siteCtrl);
