//angular.module('HealthApplication').constant('MODULE_CONFIG', ModuleConstants());
function changepasswordCtrl($scope, $state, changepasswordService,signupService, $rootScope) {

	$scope.changepasswordDto = {
	}

	$scope.doChangePassword = function() {

				$scope.changepasswordDto.userName= $rootScope.loggedUsername;

		changepasswordService.doChangePassword($scope.changepasswordDto).then(
				function(response) {
					   toastr.options = {
			                     closeButton: true,
			                     progressBar: true,
			                     positionClass : "toast-top-full-width",
			                     showMethod: 'slideDown',
			                     timeOut: 5000
			                 };
			                 toastr.success('', 'Your Password Changed Successfully and Sent To Your Registered Email Id');
					//$state.go('main.dashboard');
					
				}, function(error) {
					  /*toastr.options = {
			                     closeButton: true,
			                     progressBar: true,
			                     showMethod: 'slideDown',
			                     timeOut: 2000
			                 };
			                 toastr.error('Admin', 'ChangePassword Failed');*/
					$scope.message=JSON.stringify(error.data.message.trim());
				});
	};

	$scope.gotoChangepassword = function() {
		$state.go('main.changepassword');
	};
}
angular.module("HealthApplication").controller("changepasswordCtrl",
		changepasswordCtrl);
