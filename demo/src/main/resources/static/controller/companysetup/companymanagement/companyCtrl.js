//angular.module('HealthApplication').constant('MODULE_CONFIG', ModuleConstants());
function companyCtrl($scope, $state, companyService, countryService, $rootScope) {
	$scope.addCompany = function(user) {
		companyService.addCompany(user).then(function(response) {
			$state.go('');
		}, function(error) {
		});
	};

	$scope.getCompanyUser = function() {
		companyService.getCompanyUser($rootScope.loggedUsername).then(
				function(response) {
					$scope.user = response.data;
					$scope.getAllStatesByCountryId($scope.user.countryName.id);
					$scope.getAllCitiesByStateId($scope.user.stateName.id);
				}, function(error) {

				})
	};

	$scope.getImagePathData = function(profilePicPath) {
		companyService.getImagePath(profilePicPath).then(function(response) {
			$scope.companyImagePath = response.data;
		})
	};
	$scope.fileChanged = function(files) {
		if (files != null) {
			var file = files[0];
			$scope.filepath = files[0];
			companyService.uploadImage($scope.filepath).then(
					function(response) {
						$scope.user.profilePic = response.data.imagePath;
						$scope.imageUrl = $scope.user.profilePic;
						//$scope.getImagePathData($scope.user.profilePic);
					}, function(eror) {
					});
		}
	};
	

	$scope.getAllCountries = function() {
		countryService.getAllCountries().then(function(response) {
			$scope.countriesList = response.data;
		}, function(error) {

		})
	};

	$scope.getCountrysBasedOnIsdCode = function() {
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

	$scope.getAllCitiesByStateId = function(id) {
		countryService.getAllCitiesByStateId(id).then(function(response) {
			$scope.citiesList = response.data;
		}, function(error) {

		})
	};

	$scope.updateCompanyUser = function(user) {
		companyService.updateCompanyUser(user).then(function(response) {
			toastr.options = {
				closeButton : true,
				progressBar : true,
				showMethod : 'slideDown',
				positionClass : "toast-top-full-width",
				timeOut : 2000
			};
			toastr.success('', ' User Profile Updated Successfully');
			$scope.message = undefined;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		})
	};

	$scope.gotoChangepassword = function() {
		$state.go('main.changepassword');
	};
}
angular.module("HealthApplication").controller("companyCtrl", companyCtrl);
