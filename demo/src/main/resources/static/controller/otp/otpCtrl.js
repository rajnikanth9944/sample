//angular.module('HealthApplication').constant('MODULE_CONFIG', ModuleConstants());
function otpCtrl($scope, $state, otpService, $stateParams) {
	$scope.user = $stateParams.UserObject;
	$scope.otpDto = {
	}
	$scope.validateOtp = function() {
		$scope.otpDto.email=$scope.user.username;
		otpService.validateOtp($scope.otpDto).then(function(response) {
			
			toastr.options = {
					closeButton : true,
					progressBar : true,
					showMethod : 'slideDown',
					positionClass : "toast-top-full-width",
					timeOut : 2000
				};
				toastr.success('', ' Login Successfully');
				$state.go('main.dashboard');

		}, function(error) {
			toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass : "toast-top-right",
                    timeOut: 5000
                };
			$scope.message = JSON.stringify(error.data.message.trim());
			toastr.error($scope.message, 'Warning');
		});
	};
}
angular.module("HealthApplication").controller("otpCtrl", otpCtrl);
