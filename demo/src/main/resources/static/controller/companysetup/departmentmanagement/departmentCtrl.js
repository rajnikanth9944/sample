//angular.module('HealthApplication').constant('MODULE_CONFIG', ModuleConstants());
function departmentCtrl($scope, $state, departmentService, $rootScope,$stateParams) {
	
	$scope.page = 0;
	$scope.size = 5;
	
	$scope.department=$stateParams.departmentObj;
	$scope.addDepartment = function(department) {
		departmentService.addDepartment(department).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Data Added Successfully');
			$state.go('main.departmentlist');
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	$scope.getAllDepartmentsList= function() {
		departmentService.getAlldepartmentsList($scope.page, $scope.size).then(function(response) {
			$scope.departmentsLists = response.data.content;
			$scope.totalElements = response.data.totalElements;
			$scope.totalPages = response.data.totalPages-1;
			$scope.noOfPgaes(response.data.totalPages);
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	
	$scope.getAllDepartments= function() {
		departmentService.getAlldepartments().then(function(response) {
			$scope.departmentsList = response.data;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	
	
	$scope.updateDepartment = function(department) {
		departmentService.updateDepartment(department).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Data Update Successfully');
			$state.go('main.departmentlist');
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	$scope.deleteDepartment = function(id) {
		departmentService.deleteDepartment(id).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Data Deleted Successfully');
			$scope.getAllDepartmentsList();
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
					$scope.getAllDepartmentsList();
				});
	  
	$scope.gotoList = function() {
		$state.go('main.departmentlist');
	};
	$scope.gotoAdd = function() {
		$state.go('main.addDepartment');
	};
	$scope.gotoback = function() {
		$state.go('main.departmentlist');
	};
	$scope.gotoupdate = function(client) {
		$state.go('main.updateDepartment',{
			departmentObj:	client
		});
	};
}
angular.module("HealthApplication")
		.controller("departmentCtrl", departmentCtrl);
