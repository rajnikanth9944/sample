function loginCtrl($scope, $state, loginService, signupService,
		$rootScope, $rootScope, $localStorage,
		PATIENT_MODULE_CONFIG) {
	// $scope.getAllCategories();
	$scope.getAllCategories = function() {
		categoryService.getAllCategories().then(function(response) {
			$scope.categoriesList = response.data;
			// $localStorage.user.role.permissions = response.data;
		}, function(error) {

		})
	};

	$scope.doLogin = function(user) {
		delete $localStorage.user;
		if (user == undefined) {
			$scope.message = "Please Enter Valid Credentials!";

		} else {
			loginService.doLogin(user).then(function(response) {
				$state.go('blank');

			}, function(error) {
				$scope.message = JSON.stringify(error.data.message.trim());
			});
		}
	};
	$scope.getImagePathData = function() {
		return PATIENT_MODULE_CONFIG
				.GET_USER_IMAGEPATHDATA($rootScope.loggedUsername);
	};
	/*
	 * $scope.getImagePathData = function() { $scope.adminUserName =
	 * $rootScope.loggedUsername;
	 * companyService.getImagePathData($scope.adminUserName).then(
	 * function(response) { response.data; }, function(error) { }) };
	 */

	$scope.arrayBufferToBase64 = function(buffer) {
		var binary = '';
		var bytes = new Uint8Array(buffer);
		var len = bytes.byteLength;
		for (var i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
		return window.btoa(binary);
	}

	$scope.hasFeature = function(name) {
		$scope.userObject = $localStorage.user;
		var found = undefined;
		angular.forEach($scope.userObject.role.permissions, function(feature) {
			if (feature.category.categoryName == name) {
				found = feature;
			}
		});
		return found;
	};
	// Start-ParentDashboard-lineChart
	$scope.labels2 = [ "January", "February", "March", "April", "May", "June",
			"July" ];
	$scope.series2 = [ 'Series A', 'Series B' ];
	$scope.data2 = [ [ 65, 59, 80, 81, 56, 55, 40 ],
			[ 28, 48, 40, 19, 86, 27, 90 ] ];
	$scope.onClick = function(points, evt) {
	};
	$scope.datasetOverride = [ {
		yAxisID : 'y-axis-1'
	}, {
		yAxisID : 'y-axis-2'
	} ];
	$scope.options = {
		scales : {
			yAxes : [ {
				id : 'y-axis-1',
				type : 'linear',
				display : true,
				position : 'left'
			}, {
				id : 'y-axis-2',
				type : 'linear',
				display : true,
				position : 'right'
			} ]
		}
	};

	// End-ParentDashboard-lineChart

	// Start-ParentDashboard-barChart
	$scope.labels1 = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
	$scope.series1 = [ 'Series A', 'Series B' ];

	$scope.data1 = [ [ 65, 59, 80, 81, 56, 55, 40 ],
			[ 28, 48, 40, 19, 86, 27, 90 ] ];
	// End-ParentDashboard-barChart

	$scope.$on('loader_show', function(event, args) {
		$rootScope.loader = true;
	});
	$scope.$on('loader_hide', function(event, args) {
		$rootScope.loader = false;
	});

	// Start-Dashboard-lineChart
	$scope.getActiveDoctorsChartDataPerPresentYear = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		var currentTime = new Date();
		// returns the year (four digits)
		var year = currentTime.getFullYear();
		loginService.getActiveDoctorsChartDataPerPresentYear(
				$scope.adminUserName, year).then(function(response) {
			$scope.labels = response.data.labels;
			$scope.series = response.data.series;
			$scope.data = response.data.data;

		}, function(error) {
		})
	};
	$scope.getActiveUsersChartDataPerPresentYear = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		var currentTime = new Date();
		// returns the year (four digits)
		var year = currentTime.getFullYear();
		loginService.getActiveUsersChartDataPerPresentYear(
				$scope.adminUserName, year).then(function(response) {
			$scope.labels5 = response.data.labels;
			$scope.series5 = response.data.series;
			$scope.data5 = response.data.data;

		}, function(error) {
		})
	};

	$scope.getTotalPatientsRegisteredChartDataPerPresentYear = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		var currentTime = new Date();
		// returns the year (four digits)
		var year = currentTime.getFullYear();
		loginService.getTotalPatientsRegisteredChartDataPerPresentYear(
				$scope.adminUserName, year).then(function(response) {
			$scope.labels6 = response.data.labels;
			$scope.series6 = response.data.series;
			$scope.data6 = response.data.data;

		}, function(error) {
		})
	};

	$scope.onClick = function(points, evt) {
	};
	$scope.datasetOverride = [ {
		yAxisID : 'y-axis-1'
	} ];
	$scope.options = {
		scales : {
			yAxes : [ {
				id : 'y-axis-1',
				type : 'linear',
				display : true,
				position : 'left'
			} ]
		}
	};
	// Start-Dashboard-lineChart

	// End-Dashboard-barChart
	$scope.getTodayPatientsData = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		loginService.getTodayPatientsData($scope.adminUserName).then(
				function(response) {
					$scope.labels3 = response.data.labels;
					$scope.series3 = response.data.series;
					$scope.data3 = response.data.data;

				}, function(error) {
				})
	};
	// End-Dashboard-barChart

	$scope.getAllactiveAdmins = function() {
		$scope.adminUsername = $rootScope.loggedUsername;
		loginService.getAllactiveAdmins($scope.adminUsername).then(
				function(response) {
					$scope.activeAdminsList = response.data;
					$scope.numberOfActiveAdmins = $scope.activeAdminsList;
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};

	$scope.getAllInactiveAdmins = function() {
		$scope.adminUsername = $rootScope.loggedUsername;
		loginService.getAllInactiveAdmins($scope.adminUsername).then(
				function(response) {
					$scope.inActiveAdminsList = response.data;
					$scope.numberOfInActiveAdmins = $scope.inActiveAdminsList;
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};
	$scope.getAllactiveSiteAdmins = function() {
		$scope.adminUsername = $rootScope.loggedUsername;
		loginService
				.getAllactiveSiteAdmins($scope.adminUsername)
				.then(
						function(response) {
							$scope.activeSiteAdminsList = response.data;
							$scope.numberOfActiveSiteAdmins = $scope.activeSiteAdminsList;
						},
						function(error) {
							$scope.message = JSON.stringify(error.data.message
									.trim());
						});
	};

	$scope.getAllInactiveSiteAdmins = function() {
		$scope.adminUsername = $rootScope.loggedUsername;
		loginService
				.getAllInactiveSiteAdmins($scope.adminUsername)
				.then(
						function(response) {
							$scope.inActiveSiteAdminsList = response.data;
							$scope.numberOfInActiveSiteAdmins = $scope.inActiveSiteAdminsList;
						},
						function(error) {
							$scope.message = JSON.stringify(error.data.message
									.trim());
						});
	};

	$scope.getAllActiveTherapists = function() {
		$scope.adminUsername = $rootScope.loggedUsername;
		therapistService
				.getAllActiveTherapists($scope.adminUsername)
				.then(
						function(response) {
							$scope.activeTherapistList = response.data;
							$scope.numberOfActiveTherapists = $scope.activeTherapistList;
						},
						function(error) {
							$scope.message = JSON.stringify(error.data.message
									.trim());
						});
	};

	$scope.getAllInactiveTherapists = function() {
		$scope.adminUsername = $rootScope.loggedUsername;
		therapistService
				.getAllInactiveTherapists($scope.adminUsername)
				.then(
						function(response) {
							$scope.inActiveTherapistList = response.data;
							$scope.numberOfInaciveTherapists = $scope.inActiveTherapistList;
						},
						function(error) {
							$scope.message = JSON.stringify(error.data.message
									.trim());
						});
	};

	$scope.getAllAppointmentsCountByRole = function() {
		$scope.adminUsername = $rootScope.loggedUsername;
		loginService.getAllAppointmentsCountByRole($scope.adminUsername).then(
				function(response) {
					$scope.noOfAppointmentsList = response.data;
					$scope.numberOfAppointments = $scope.noOfAppointmentsList;
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};

	$scope.getAllRegistrations = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		userManagementSerrvice.getAllRegistrations($scope.adminUserName).then(
				function(response) {
					$scope.userList = response.data;
					$scope.numberOfRegisteredUsers = $scope.userList;

				}, function(error) {
				});
	};

	$scope.totalPatientsRegistered = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		patientService.totalPatientsRegistered($scope.adminUserName).then(
				function(response) {
					$scope.totalPatientsRegistered = response.data;
				}, function(error) {
				})
	};
	$scope.inActivePatients = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		patientService.inActivePatients($scope.adminUserName).then(
				function(response) {
					$scope.inActivePatients = response.data;
				}, function(error) {
				})
	};

	$scope.getNewPatientsCount = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		patientService.getNewPatientsCount($scope.adminUserName).then(
				function(response) {
					$scope.count = response.data;
				}, function(error) {
				})
	};

	$scope.logout = function() {
		delete $localStorage.user;
		// $state.go('index.html');
	};

	$scope.gotoLogin = function() {
		$state.go('login');
	};
	$scope.gotoRegistration = function() {
		$state.go('signup');
	};

	$scope.chartOptions = {
		palette : "bright",
		dataSource : [ {
			country : "Used GB",
			medals : 500
		}, {
			country : "Unused GB",
			medals : 100
		} ],
		title : "Data Utilization(GB)",
		legend : {
			orientation : "horizontal",
			itemTextPosition : "right",
			horizontalAlignment : "right",
			verticalAlignment : "bottom",
			columnCount : 4
		},
		"export" : {
			enabled : true
		},
		series : [ {
			argumentField : "country",
			valueField : "medals",
			label : {
				visible : true,
				font : {
					size : 16
				},
				connector : {
					visible : true,
					width : 0.5
				},
				position : "columns",
				customizeText : function(arg) {
					return arg.valueText + " GB" + " (" + arg.percentText + ")";
				}
			}
		} ]
	};

}

angular.module("HealthApplication").controller("loginCtrl", loginCtrl);