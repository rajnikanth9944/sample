//angular.module('HealthApplication').constant('MODULE_CONFIG', ModuleConstants());
function companyTypeCtrl($scope, $state, companyTypeService, $rootScope,$stateParams) {
	
	$scope.page = 0;
	$scope.size = 5;
	
	
	$scope.companyType=$stateParams.companyTypeObj;
	$scope.addCompanyType = function(companytype) {
		companyTypeService.addCompanyType(companytype).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Company Type Saved Successfully');
			
			$state.go('main.companyTypesList');
		}, function(error) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-right",
                    timeOut: 2000
                };
			var message2 = JSON.stringify(error.data.message.trim());
			$scope.message=message2.substring(1,message2.length-1);
			toastr.error($scope.message, 'Error');
		});
	};
	$scope.getAllCompaniesList = function() {
		companyTypeService.getAllCompaniesList($scope.page, $scope.size).then(function(response) {
			$scope.companyTypesLists = response.data.content;
			$scope.totalElements = response.data.totalElements;
			$scope.totalPages = response.data.totalPages-1;
			$scope.noOfPgaes(response.data.totalPages);
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	
	$scope.getAllCompanies = function() {
		companyTypeService.getAllCompanies().then(function(response) {
			$scope.companyTypesList = response.data;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	
	$scope.updateCompanyType = function(companytype) {
		companyTypeService.updateCompanyType(companytype).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Company Type Updated Successfully');
			$state.go('main.companyTypesList');
		}, function(error) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-right",
                    timeOut: 2000
                };
			var message2 = JSON.stringify(error.data.message.trim());
			$scope.message=message2.substring(1,message2.length-1);
			toastr.error($scope.message, 'Error');
		});
	};
	$scope.deleteCompanyType = function(id) {
		companyTypeService.deleteCompanyType(id).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Company Type Deleted Successfully');
			$scope.getAllCompaniesList();
		}, function(error) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-right",
                    timeOut: 2000
                };
			var message2 = JSON.stringify(error.data.message.trim());
			$scope.message=message2.substring(1,message2.length-1);
			toastr.error($scope.message, 'Error');
			
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
					$scope.getAllCompaniesList();
				});

		
		
	$scope.gotoList = function() {
		$state.go('main.companyTypesList');
	};
	$scope.gotoAdd = function() {
		$state.go('main.addCompanyType');
	};
	$scope.gotoback = function() {
		$state.go('main.companyTypesList');
	};
	$scope.gotoupdate = function(companytype) {
		$state.go('main.updateCompanyType',{
			companyTypeObj:	companytype
		});
	};
}
angular.module("HealthApplication")
		.controller("companyTypeCtrl", companyTypeCtrl);
