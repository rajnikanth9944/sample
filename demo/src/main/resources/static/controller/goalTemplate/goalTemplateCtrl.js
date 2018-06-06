function goalTemplateCtrl($scope, $state, goalTemplateService, $rootScope,
		$stateParams, patientService) {

	$scope.goal = {};
	$scope.patientList = [];
	$scope.goalUpdate = $stateParams.goalObj;
	$scope.goalsList1 = [];
	$scope.goalsList2 = [];
	$scope.goalsList3 = [];
	$scope.goalsList4 = [];
	$scope.goalsList5 = [];
	$scope.goalsList6 = [];
	$scope.assigned = false;
	$scope.selected = false;
	$scope.listOfStatusGoals = [];
	$scope.patientGoals = [];
	$scope.patient = {
		patientGoals : []
	};
	$scope.listOfGoals = [];
	if ($stateParams.Patient != undefined) {
		$scope.patient = $stateParams.Patient;
		$scope.assigned = true;
	}
	;

	$scope.getAllgoals = function() {
		goalTemplateService.getAllgoals().then(function(response) {
			$scope.goalList = response.data;
		}, function(error) {

		});
	};

	$scope.addGoal = function(status1) {
		$scope.goal.status = status1;
		$scope.goal.selected = $scope.selected;
		goalTemplateService.addGoal($scope.goal).then(function(response) {
			toastr.options = {
				closeButton : true,
				progressBar : true,
				showMethod : 'slideDown',
				positionClass : "toast-top-right",
				timeOut : 2000
			};
			toastr.success('', 'Goal Saved Successfully');
			$scope.getAllGoalsByStatus1($scope.goal.status);
			$scope.goal.status = undefined;
			$scope.goal.goalTemplateLookupName = undefined;

		}, function(error) {
			toastr.options = {
				closeButton : true,
				progressBar : true,
				showMethod : 'slideDown',
				positionClass : "toast-top-right",
				timeOut : 2000
			};
			$scope.message = JSON.stringify(error.data.message.trim());
			toastr.error($scope.message, 'Error');
		});
	};

	$scope.updateGoal = function(goal) {

		goalTemplateService.updateGoal(goal).then(function(response) {
			$state.go('main.goalsTemplate');
		}, function(error) {
		});
	};
	$scope.deleteGoal = function(id) {
		goalTemplateService.deleteGoal(id).then(function(response) {
			$scope.getAllgoals();
		}, function(error) {
		});
	};
	$scope.gotoList = function() {
		$state.go('main.goalsTemplate');
	};

	$scope.gotoback = function() {
		$state.go('main.goalsTemplate');
	};
	$scope.gotoupdate = function(goal) {
		$state.go('main.updateGoalTemplate', {
			goalObj : goal
		});
	};
	var counter = 0;
	$scope.elements = [ {
		id : counter,
		goalLookupName : ''
	} ];

	$scope.newItem = function() {
		counter++;
		$scope.elements.push({
			id : counter,
			goalLookupName : ''
		});
	}
	$scope.deleteItem = function() {
		counter--;
		$scope.elements.pop({
			id : counter,
			goalLookupName : ''
		});

	}
	$scope.show = function(elements) {
		// alert(JSON.stringify(elements));

	};

	$scope.getAllPatientsByRole = function() {
		patientService.getAllPatientsByRole($rootScope.loggedUsername).then(
				function(response) {
					$scope.patientList = response.data;
				}, function(error) {

				})
	};

	$scope.showMethod = function() {
		$scope.buttonstatus = true;
	};

	$scope.hideMethod = function() {
		$scope.buttonstatus = false;
	};

	$scope.assignGoalsToPatient = function() {
		if ($scope.patient.patientGoals != undefined) {
			patientService
					.assignGoalstoPatient($scope.patient.patientGoals,
							$scope.patient.id)
					.then(
							function(repsonse) {
								toastr.options = {
									closeButton : true,
									progressBar : true,
									showMethod : 'slideDown',
									positionClass : "toast-top-right",
									timeOut : 2000
								};
								toastr
										.success('',
												'Assign Goals to Specific patient Successfully');
								$state
										.go(
												'main.patientviewtabs.patient_goals_sheet',
												{
													patientObject : $scope.patient
												});
							}, function(error) {

							})
		}
	};

	$scope.getAllGoalsByStatus1 = function(status) {
		goalTemplateService.getAllGoalsByStatus(status).then(
				function(response) {
					$scope.goalsList = response.data;
				}, function(error) {

				})
	};

	$scope.$watchGroup([ 'selected' ], function(oldSize) {

	});

	$scope.onclickEvent = function(goal) {
		$scope.listOfStatusGoals.push(goal);
	};
	
// generate present Date
	$scope.today = new Date();

	if ($scope.today.getDate() < 10) {
		$scope.date = "0" + $scope.today.getDate();
	} else {
		$scope.date = $scope.today.getDate();
	}
	if ($scope.today.getMonth() < 10) {
		$scope.monthnumbaer = $scope.today.getMonth() + 1;
		$scope.month = "0" + $scope.monthnumbaer;
	} else {
		$scope.month = $scope.today.getMonth() + 1;
	}
	$scope.localDate = $scope.month + " " + $scope.date + " "
			+ $scope.today.getFullYear();

	console.log(" $scope.localDate" +$scope.localDate);

};

angular.module("HealthApplication").controller("goalTemplateCtrl",
		goalTemplateCtrl);