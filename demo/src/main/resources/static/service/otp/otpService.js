function otpService(MODULE_CONFIG, $http) {
	this.validateOtp = function(otp) {
	return 	$http.post(MODULE_CONFIG.VALIDATE_OTP(),otp);
	};
}

angular.module('HealthApplication').service('otpService', otpService);