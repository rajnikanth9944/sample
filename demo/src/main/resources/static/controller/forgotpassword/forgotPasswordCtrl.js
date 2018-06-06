//angular.module('HealthApplication').constant('MODULE_CONFIG', ModuleConstants());
function forgotpasswordCtrl($scope, $state, forgotpasswordService) {
	
	$scope.$on('loader_show', function(event, args) {
		$rootScope.loader = true;
	});
	$scope.$on('loader_hide', function(event, args) {
		$rootScope.loader = false;
	});
	
	$scope.doForgotPassword = function(email) {
		forgotpasswordService.doForgotPassword(email).then(function(response) {
			toastr.options = {
				closeButton : true,
				progressBar : true,
				showMethod : 'slideDown',
				positionClass : "toast-top-full-width",
				timeOut : 5000
			};
			toastr.success('', ' Password Sent To Your Registered Email...');
			$state.go('login');
		}, function(error) {
			/*
			 * toastr.options = { closeButton: true, progressBar: true,
			 * showMethod: 'slideDown', timeOut: 5000 }; toastr.error('Admin',
			 * 'Enter Registered Email Id');
			 */
			$scope.message=JSON.stringify(error.data.message.trim());
		});
	};
	

	
}
angular.module("HealthApplication").controller("forgotpasswordCtrl",
		forgotpasswordCtrl);
