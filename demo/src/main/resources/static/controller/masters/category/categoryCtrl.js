//angular.module('HealthApplication').constant('MODULE_CONFIG', ModuleConstants());
function categoryCtrl($scope, $state, categoryService, $rootScope,$stateParams) {
	
	$scope.category=$stateParams.categoryObj;
	$scope.addCategory = function(category) {
		categoryService.addCategory(category).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Data Added Successfully');
			$state.go('main.categoryList');
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	$scope.getAllCategories = function() {
		categoryService.getAllCategories().then(function(response) {
			$scope.categoryList = response.data;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	
	$scope.updateCategory = function(category) {
		categoryService.updateCategory(category).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Data Updated Successfully');
			$state.go('main.categoryList');
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	$scope.deleteCategory = function(id) {
		categoryService.deleteCategory(id).then(function(response) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-full-width",
                    timeOut: 2000
                };
                toastr.success('',' Data Deleted Successfully');
			$scope.getAllCategories();
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};
	$scope.gotoList = function() {
		$state.go('main.categoryList');
	};
	$scope.gotoAdd = function() {
		$state.go('main.addCategory');
	};
	$scope.gotoback = function() {
		$state.go('main.categoryList');
	};
	$scope.gotoupdate = function(category) {
		$state.go('main.updateCategory',{
			categoryObj:	category
		});
	};
}
angular.module("HealthApplication")
		.controller("categoryCtrl", categoryCtrl);
