//angular.module('HealthApplication').constant('MODULE_CONFIG', ModuleConstants());
function clientTypeCtrl($scope, $state, clientTypeService, $rootScope,$stateParams) {
	
	$scope.page = 0;
	$scope.size = 5;
	
	$scope.clientType=$stateParams.clientTypeObj;
	$scope.addClientType = function(client) {
		clientTypeService.addClientType(client).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Data Added Successfully');
			$state.go('main.clienttypelist');
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	$scope.getAllClientsList = function() {
		clientTypeService.getAllClientsList($scope.page, $scope.size).then(function(response) {
			$scope.clientsLists = response.data.content;
			$scope.totalElements = response.data.totalElements;
			$scope.totalPages = response.data.totalPages-1;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	
	$scope.getAllClients = function() {
		clientTypeService.getAllClients().then(function(response) {
			$scope.clientsList = response.data;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	
	$scope.updateClientType = function(client) {
		clientTypeService.updateClientType(client).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Data updated Successfully');
			$state.go('main.clienttypelist');
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	$scope.deleteClientType = function(id) {
		clientTypeService.deleteClientType(id).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Data Deleted Successfully');
			$scope.getAllClientsList();
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
					$scope.getAllClientsList();
				});

		
	$scope.gotoList = function() {
		$state.go('main.clienttypelist');
	};
	$scope.gotoAdd = function() {
		$state.go('main.addclienttype');
	};
	$scope.gotoback = function() {
		$state.go('main.clienttypelist');
	};
	$scope.gotoupdate = function(client) {
		$state.go('main.updateclienttype',{
		clientTypeObj:	client
		});
	};
}
angular.module("HealthApplication")
		.controller("clientTypeCtrl", clientTypeCtrl);
