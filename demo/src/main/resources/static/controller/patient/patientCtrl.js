function PatientCtrl($scope, $state, $rootScope, goalTemplateService, $http,
		$log, evalutionSheetService, $sce, patientGoalService, $stateParams,
		patientService, evalutionCategorService, countryService,
		companyService, templateService, clientTypeService,
		PATIENT_MODULE_CONFIG,$uibModal) {
	$scope.page = 0;
	$scope.size = 5;
	$scope.patient = {};
	$scope.progress = {};
	$scope.progressNote1 = {};
	$scope.exitNote = {};
	$scope.patientGoalDto = {};
	$scope.patientGoalDtoObject = {};
	if ($stateParams.patientId != undefined) {
		$scope.PatientId = $stateParams.patientId;
	}
	if($scope.patient !=undefined){
		if($scope.patient.therapyAddress !=undefined){
			$scope.ModelData=true;
		}else{
			$scope.ModelData=false;
		}
	}
	
	if($scope.patientObject !=undefined){
	if($scope.patientObject.therapyAddress != undefined){
		$scope.ModelData123=true;
	}else{
		$scope.ModelData123=false;
	}
	}
	// converting dd/mm/yyyy formate to mm/dd/yyyy
	$scope.changeDate = function(appointmentStartedDate) {
		var currentDate = appointmentStartedDate; // Extracting the date value
		// in dd/mm/yyyy format from
		// the mentioned text box
		var newDate = currentDate.split('-'); // Splitting the extracted date
		// value using the delimiter /,
		// which is the seperator used
		// in the date value
		$scope.currentDate = newDate[1] + "-" + newDate[2].substring(0, 2)
				+ "-" + newDate[0];// Constructing a new date value (string)
		// using the splitted values.
		return $scope.currentDate;
	}
	if ($stateParams.patientObject != undefined) {
		$scope.patientObject = $stateParams.patientObject;
	}
	
	/*
	 * $scope.getAllgoals = function() {
	 * goalTemplateService.getAllgoals().then(function(response) {
	 * $scope.flag=true; $scope.goalList = response.data; }, function(error)
	 * {}); };
	 */
	function validateForm() {
		var x = $scope.patientForm.firstName.$valid;
		if (x == flase) {
			return false;
		}
	}

	$scope.changeMobileNumber = function(mobileNumber) {
		var currentNumber = mobileNumber.toString();
		changedNumber = "(" + currentNumber.substring(0, 3) + ")"
				+ currentNumber.substring(3, 6) + "-"
				+ currentNumber.substring(6, 10);
		return changedNumber;
	}
	$scope.findAllpatientsByPaginationByRole = function() {
		patientService.findAllpatientsByPaginationByRole(
				$rootScope.loggedUsername, $scope.page, $scope.size).then(
				function(response) {
					$scope.patientListByAdmin = response.data.content;
					$scope.totalElements = response.data.totalElements;
					$scope.totalPages = response.data.totalPages - 1;
					$scope.noOfPgaes(response.data.totalPages);
				});
	};

	$scope.getAllPatients = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		patientService.getAllPatients($scope.adminUserName).then(
				function(response) {
					$scope.patientList = response.data;
				}, function(error) {
				});
	};

	$scope.ngInitMethod = function() {
		if ($rootScope.loggedUserRole = "Therapist") {
			$scope.getAppointedPatientsByTherapist();

		} else {
			$scope.findAllpatientsByPaginationByAdmin();
		}
	};

	$scope.getAllTemplates = function() {
		templateService.getAllTemplates().then(function(response) {
			$scope.templateList = response.data;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};

	$scope.getAllStatesByCountryId = function(id) {
		countryService.getAllStatesByCountryId(id).then(function(response) {
			$scope.statesList = response.data;
		}, function(error) {
		})
	};
	$scope.getAllClients = function() {
		clientTypeService.getAllClients().then(function(response) {
			$scope.clientsList = response.data;
		}, function(error) {
			$scope.message = JSON.stringify(error.data.message.trim());
		});
	};

	$scope.getAllCitiesByStateId = function(id) {
		countryService.getAllCitiesByStateId(id).then(function(response) {
			$scope.citiesList = response.data;
		}, function(error) {
		})
	};
	$scope.getCountrysBasedOnIsdCode = function() {
		countryService.getCountrysBasedOnIsdCode().then(function(response) {
			$scope.countriesList = response.data;
			if($scope.patientObject.regionalCenter != undefined){
				if($scope.patientObject.regionalCenter.reginoalCenterAddress != undefined){
					$scope.getAllStatesByCountryId($scope.patientObject.regionalCenter.reginoalCenterAddress.country.id);
					$scope.getAllCitiesByStateId($scope.patientObject.regionalCenter.reginoalCenterAddress.state.id);
				}
			}
			if($scope.patientObject.insurance !=undefined){
				if($scope.patientObject.insurance.address != undefined){
					$scope.getAllStatesByCountryId($scope.patientObject.insurance.address.country.id);
					$scope.getAllCitiesByStateId($scope.patientObject.insurance.address.state.id);
				}
			}
			if($scope.patientObject != undefined){
				if($scope.patientObject.therapyAddress !=undefined){
					$scope.getAllStatesByCountryId($scope.patientObject.therapyAddress.country.id);
					$scope.getAllCitiesByStateId($scope.patientObject.therapyAddress.state.id);
			}
			}
			
		}, function(error) {
		})
	};

	$scope.fileChanged = function(files) {
		if (files != null) {
			var file = files[0];
			$scope.filepath = files[0];
			patientService.uploadDocument($scope.filepath).then(
					function(response) {
						$scope.path = response.data.imagePath;
						$scope.signaturePath = $scope.path;
					}, function(eror) {
					});
		}
	};
	$scope.documents = [];
	$scope.documentChanged = function(files,documentType) {
		if (files != null) {
			var file = files[0];
			$scope.filepath = files[0];
			patientService.uploadDocument($scope.filepath).then(
					function(response) {
						toastr.options = {
							closeButton : true,
							progressBar : true,
							showMethod : 'slideDown',
							positionClass : "toast-top-right",
							timeOut : 2000
						};
						toastr
								.success('',
										'You have selected PDF to upload!!!');
						$scope.path = response.data.imagePath;
						$scope.document=response.data;
						$scope.document.documentType=$scope.documentType;
						$scope.documents.push($scope.document);
					},
					function(error) {
						toastr.options = {
							closeButton : true,
							progressBar : true,
							showMethod : 'slideDown',
							positionClass : "toast-top-right",
							timeOut : 2000
						};
						$scope.message = JSON.stringify(error.data.message
								.trim());
						toastr.error($scope.message, 'Error');
					});
		}
	};

	$scope.addPatientData = function() {
		$scope.patient.adminUser = $rootScope.loggedUsername;
		$scope.patient.documents = $scope.documents;

		if ($scope.email) {
			$scope.patient.communicationStatus = true;
		}
		if ($scope.sms) {
			$scope.patient.communicationStatus = false;
		}
		patientService
				.addPatient($scope.patient)
				.then(
						function(response) {
							toastr.options = {
								closeButton : true,
								progressBar : true,
								showMethod : 'slideDown',
								positionClass : "toast-top-full-width",
								timeOut : 3000
							};
							toastr
									.success('',
											'Patient Registered Successfully and  mail sent to registered E-Mail Id!');

							$state.go('main.patient_list');
						},
						function(error) {
							toastr.options = {
								closeButton : true,
								progressBar : true,
								showMethod : 'slideDown',
								positionClass : "toast-top-right",
								timeOut : 3000
							};
							$scope.message = JSON.stringify(error.data.message
									.trim());
							toastr.error($scope.message, 'Error');
						});
	};

	$scope.gotoPatientViewPage = function(patient) {
		$state.go('main.patientviewtabs.patient_documents', {
			patientObject : patient
		});
	};

	$scope.gotoPatientDetails = function(patient) {
		$state.go('main.patientDetails', {
			patientObject : patient
		});
	};
	/*
	 * $scope.getAllQuestionCategories = function() {
	 * evalutionCategorService.getAllEvalutionCategories().then(
	 * function(response) { $scope.questionCategoryList = response.data; },
	 * function(error) { $scope.message =
	 * JSON.stringify(error.data.message.trim()); }); };
	 */

	$scope.getAllQuestionCategories = function() {
		evalutionCategorService.getAllCategorysByPatientId(
				$scope.patientObject.id).then(function(response) {
			$scope.questionCategoryList = response.data;
		}, function(error) {
		});
	};

	$scope.noOfPages = function(totalNoOfPages) {
		$scope.pageList = [];
		for (i = 0; i < totalNoOfPages; i++) {
			$scope.pageList.push(i);
		}
	};

	$scope.getEvalutionSheetByStatusAndPatientId = function(patientId, status) {
		evalutionSheetService.findEvalutionSheetByStatusAndPatientId(patientId,
				status).then(function(response) {
			$scope.progress = response.data;
		}, function(error) {

		})

	};

	$scope.getProgressSheetReportBy = function() {
		evalutionSheetService.getProgressSheetReportBy($scope.patientObject.id)
				.then(function(response) {
					$scope.progressNote1 = response.data;
				}, function(error) {
				})
	};

	$scope.getExitSheetReportBy = function() {
		evalutionSheetService.getExitSheetReportBy($scope.patientObject.id)
				.then(function(response) {
					$scope.exitNote = response.data;
				}, function(error) {
				})
	};

	$scope.addprogressSheet = function() {
		$scope.progress.patient = $scope.patientObject;

		if ($scope.progress.patientQuestionCategories != undefined) {
			$scope.progress.patientQuestionCategories = $scope.progress.patientQuestionCategories;
		} else {
			$scope.progress.questionCategoriesDtos = $scope.questionCategoryList;
		}
		$scope.progress.status = "1";
		evalutionSheetService.addprogressSheet($scope.progress).then(
				function(response) {
					toastr.options = {
						closeButton : true,
						progressBar : true,
						showMethod : 'slideDown',
						positionClass : "toast-top-full-width",
						timeOut : 2000
					};
					toastr.success('',
							'EvalutionSheet Note Data Added Successfully');
					$scope.getEvalutionSheetByStatusAndPatientId(
							$scope.patientObject.id, "1");
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};

	$scope.getEvalutionSheetByStatusAndPatientIdProgress = function(patientId,
			status) {
		evalutionSheetService.findEvalutionSheetByStatusAndPatientId(patientId,
				status).then(function(response) {
			$scope.progressNote = response.data;
		}, function(error) {

		})

	};

	$scope.getEvalutionSheetByPatientIdStatus = function(patientId) {
		evalutionSheetService.getEvalutionSheetByPatientIdStatus(patientId)
				.then(function(response) {
					$scope.progressNote = response.data;
				}, function(error) {

				})

	};

	$scope.addEvalutionSheet = function() {
		$scope.sheetData.patient = $scope.patientObject;
		$scope.sheetData.questionCategoriesDtos = $scope.questionCategoryList;
		if ($scope.sheetData.patientQuestionCategories != undefined) {
			$scope.sheetData.patientQuestionCategories = $scope.sheetData.patientQuestionCategories;
		}
		$scope.sheetData.status = "1";
		evalutionSheetService.addSheet($scope.sheetData).then(
				function(response) {
					toastr.options = {
						closeButton : true,
						progressBar : true,
						showMethod : 'slideDown',
						positionClass : "toast-top-full-width",
						timeOut : 2000
					};
					toastr.success('', 'Evalution Data Added Successfully');
					/* $state.go('main.roleist'); */
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};

	$scope.addProgressNoteSheet = function() {
		$scope.progressNote1.patient = $scope.patientObject;
		if ($scope.progressNote1.patientQuestionCategories != undefined) {
			$scope.progressNote1.patientQuestionCategories = $scope.progressNote1.patientQuestionCategories;
		} else {
			$scope.progressNote1.questionCategoriesDtos = $scope.questionCategoryList;
		}
		$scope.progressNote1.status = "2";
		evalutionSheetService.addProgressNote($scope.progressNote1).then(
				function(response) {
					toastr.options = {
						closeButton : true,
						progressBar : true,
						showMethod : 'slideDown',
						positionClass : "toast-top-full-width",
						timeOut : 2000
					};
					toastr
							.success('',
									'Progress1 Note Data Added Successfully');
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};

	$scope.addPatientGoals = function() {
		$scope.patientGoalDtoObject = {
			"golaTemplatelookups" : $scope.goalList,
			"patientGoals" : $scope.patientGoalList
		}
		if ($scope.patientGoalDtoObject != undefined) {
			patientGoalService.addPatientGoal($scope.patientGoalDtoObject,
					$scope.patientObject).then(function(response) {
				toastr.options = {
					closeButton : true,
					progressBar : true,
					showMethod : 'slideDown',
					positionClass : "toast-top-full-width",
					timeOut : 2000
				};
				toastr.success('', 'Patient Goal Data Added Successfully');

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
		}

	};
	$scope.updatePatient = function() {
		$scope.patientObject.adminUser = $rootScope.loggedUsername;
		$scope.patientObject.documents = $scope.documents;
		patientService.updatePatient($scope.patientObject).then(
				function(response) {
					toastr.options = {
						closeButton : true,
						progressBar : true,
						showMethod : 'slideDown',
						positionClass : "toast-top-full-width",
						timeOut : 2000
					};
					toastr.success('', 'Patient Updated Successfully!!');

					$state.go('main.patient_list');
				}, function(error) {
					toastr.options = {
						closeButton : true,
						progressBar : true,
						showMethod : 'slideDown',
						positionClass : "toast-top-full-width",
						timeOut : 2000
					};
					$scope.message = JSON.stringify(error.data.message.trim());
					toastr.error($scope.message, ' Error');
				});
	};

	// report
	$scope.generateProgressReport = function() {
		patientService.generateProgressReport($scope.patientObject.id).then(
				function(response) {
					responseType: 'arraybuffer'
					var file = new Blob([ response.data ], {
						type : 'application/pdf'
					});
					var fileURL = URL.createObjectURL(file);
					$scope.content = $sce.trustAsResourceUrl(fileURL);
					window.open(fileURL);
				}, function(error) {
				});
	};

	$scope.generateEvaluationReport = function() {
		patientService.generateEvaluationReport($scope.patientObject.id).then(
				function(response) {
					var file = new Blob([ response.data ], {
						type : 'application/pdf'
					});
					var fileURL = URL.createObjectURL(file);
					$scope.content = $sce.trustAsResourceUrl(fileURL);
					window.open(fileURL);
				}, function(error) {
				});
	};
	$scope.generateExitNoteReport = function() {
		patientService.generateExitNoteReport($scope.patientObject.id).then(
				function(response) {
					var file = new Blob([ response.data ], {
						type : 'application/pdf'
					});
					var fileURL = URL.createObjectURL(file);
					$scope.content = $sce.trustAsResourceUrl(fileURL);
					window.open(fileURL);
				}, function(error) {
				});
	};

	$scope.addExitNoteSheet = function() {
		$scope.exitNote.patient = $scope.patientObject;
		$scope.exitNote.status = "3";
		/*
		 * $scope.exitNote.questionCategoriesDtos=$scope.questionCategoryList;
		 * if($scope.exitNote.patientQuestionCategories != undefined){
		 * $scope.exitNote.patientQuestionCategories=$scope.exitNote.patientQuestionCategories; }
		 */
		evalutionSheetService.addExitNote($scope.exitNote).then(
				function(response) {
					toastr.options = {
						closeButton : true,
						progressBar : true,
						showMethod : 'slideDown',
						positionClass : "toast-top-full-width",
						timeOut : 2000
					};
					toastr.success('', 'Exit Note Data Added Successfully');
				}, function(error) {
					$scope.message = JSON.stringify(error.data.message.trim());
				});
	};

	$scope.oneAtATime = true;
	$scope.groups = [ {
		title : 'Dynamic Group Header - 1',
		content : 'Dynamic Group Body - 1'
	}, {
		title : 'Dynamic Group Header - 2',
		content : 'Dynamic Group Body - 2'
	} ];

	$scope.items = [ 'Item 1', 'Item 2', 'Item 3' ];

	$scope.addItem = function() {
		var newItemNo = $scope.items.length + 1;
		$scope.items.push('Item ' + newItemNo);
	};

	$scope.status = {
		isFirstOpen : true,
		isFirstDisabled : false
	};
	$scope.gotoList = function() {
		$state.go('main.patient_list');
	};

	$scope.gotoAdd = function() {
		$state.go('main.add_patient');
	};
	$scope.gotoback = function() {
		$state.go('main.patient_list');
	};
	$scope.gotoupdate = function(patient) {
		$state.go('main.updatePatient', {
			patientObject : patient

		});
	};
	$scope.getAllDocuments=function(){
		patientService.getAllDocuments($scope.patientObject.id).then(
				function(response) {
					$scope.documentsList = response.data;
				}, function(error) {
				})
	};
	$scope.getPatientDocuments=function(status){
		patientService.getAllDocumentsByStatus($scope.patientObject.id,status).then(
				function(response) {
					$scope.patientDocumentsList = response.data;
				}, function(error) {
				})
	};
	$scope.getEvaluationDocuments=function(status){
		patientService.getAllDocumentsByStatus($scope.patientObject.id,status).then(
				function(response) {
					$scope.evaluationDocumentsList = response.data;
				}, function(error) {
				})
	};

	$scope.getTherapistDocuments = function(status) {
		patientService.getAllDocumentsByStatus($scope.patientObject.id,status).then(
				function(response) {
					$scope.therapistDocumentsList = response.data;
				}, function(error) {
				})
	};

	$scope.getDocument = function(path) {
		patientService.getPatientDocument(path).then(function(response) {
			$scope.documentPath = response.data;
		}, function(error) {
		})
	};

	$scope.displayPDF = function(documentId) {
		$http.get(PATIENT_MODULE_CONFIG.DISPLAY_PDF(documentId), {
			responseType : 'arraybuffer'
		}).success(function(response) {
			var file = new Blob([ response ], {
				type : 'application/pdf'
			});
			var fileURL = URL.createObjectURL(file);
			$scope.content = $sce.trustAsResourceUrl(fileURL);
		});
	}

	$scope.findAllpatientsByPagination = function() {
		patientService.findAllPatient($scope.page, $scope.size).then(
				function(response) {
					$scope.patientList = response.data.content;
					$scope.totalElements = response.data.totalElements;
					$scope.totalPages = response.data.totalPages - 1;
					$scope.noOfPgaes(response.data.totalPages);
				});
	};
	/*
	 * $scope.findAllpatientsByPaginationByAdmin = function() {
	 * patientService.findAllPatientsByAdmin($rootScope.loggedUsername
	 * ,$scope.page, $scope.size).then( function(response) {
	 * $scope.patientListByAdmin = response.data.content; $scope.totalElements =
	 * response.data.totalElements; $scope.totalPages = response.data.totalPages -
	 * 1; $scope.noOfPgaes(response.data.totalPages); }); };
	 */

	// Pagination logic
	$scope.noOfPgaes = function(totalpages) {

		$scope.pageList = [];
		for (i = 0; i < totalpages; i++) {
			$scope.pageList.push(i);
		}

	};

	$scope.pageChanged = function(page) {
		$scope.page = page;
	};

	$scope.sizeChanged = function(size) {
		$scope.size = size;
	};
	$scope.firstPage = function() {
		$scope.page = 0;
	};

	$scope.lastPage = function() {
		$scope.page = $scope.totalPages;
	};

	$scope.previousPage = function() {
		if ($scope.page > 0) {
			$scope.page = $scope.page - 1;
		}
	};

	$scope.nextPage = function() {
		if ($scope.page < $scope.totalPages) {
			$scope.page = $scope.page + 1;
		}
	};

	$scope.$watchGroup([ 'size', 'page' ], function(oldSize, oldPage) {
		$scope.findAllpatientsByPaginationByRole();
	});

	// ///////////////////////////////////////////////////////////

	$scope.today = new Date();

	var tabs = [
			{
				title : 'Zero',
				content : 'Woah...that is a really long title!'
			},

			{
				title : 'Twenty',
				content : "If you're still reading this, you should just go check out the API docs for tabs!"
			} ], selected = null, previous = null;
	$scope.tabs = tabs;
	$scope.selectedIndex = 0;
	$scope.$watch('selectedIndex', function(current, old) {
		previous = selected;
		selected = tabs[current];
		if (old + 1 && (old != current))
			$log.debug('Goodbye !');
		if (current + 1)
			$log.debug('Hello !');
	});

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
	$scope.todaytabdate = $scope.month + " " + $scope.date + " "
			+ $scope.today.getFullYear();

	console.log(" $scope.todaytabdate" + $scope.todaytabdate);

	// getAllPatientGoals By PatientId

	$scope.getAllgoalsByPatientId = function() {
		goalTemplateService.getAllgoalsByPatient_Id($scope.patientObject.id)
				.then(function(response) {
					$scope.flag = true;
					$scope.goalList = response.data;
				}, function(error) {
				});
	};
	$scope.findAllPatientGoalsByPatientIdAndCreatedDate = function(tabdate) {
		/*
		 * if(!$scope.addFlag){ $scope.patientGoalDto={
		 * "patientId":$scope.patientObject.id, "date":tabdate };
		 * patientGoalService.findAllPatientGoalsByPatientIdAndCreatedDate($scope.patientGoalDto).then(
		 * function(response) { $scope.flag=false; $scope.patientGoalList =
		 * response.data; }); }else if($scope.addFlag ==value){
		 * $scope.getAllgoals(); $scope.addFlag=false; }else{
		 * $scope.getAllgoals(); }
		 */
		$scope.patientGoalDto = {
			"patientId" : $scope.patientObject.id,
			"date" : tabdate
		};
		patientGoalService.findAllPatientGoalsByPatientIdAndCreatedDate(
				$scope.patientGoalDto).then(function(response) {
			$scope.flag = false;
			$scope.patientGoalList = response.data;
			if ($scope.patientGoalList.length < 1) {
				// $scope.getAllgoals();
				// $scope.getAllgoalsByPatientId();
				// $scope.findAllPatientGoalsByPatientIdAndCreatedDate
			}
			if (tabdate == $scope.todaytabdate) {
				$scope.addFlag = true;
			} else {
				$scope.addFlag = false;
			}

		});

	};

	$scope.getAllCratedDatesOfPatientGoals = function() {
		patientGoalService
				.getAllCratedDatesOfPatientGoals($scope.patientObject.id)
				.then(
						function(response) {
							$scope.datesList = response.data;
							if ($scope.datesList != undefined) {
								if ($scope.datesList.length < 1) {
									$scope.datesList.push($scope.todaytabdate);
									$scope.addFlag = true;
								}
							}
							$scope
									.findAllPatientGoalsByPatientIdAndCreatedDate($scope.datesList[0]);
						})
	};

	$scope.addFlag = false;
	$scope.addTab = function() {
		if ($scope.datesList[$scope.datesList.length - 1] != $scope.todaytabdate) {
			$scope.datesList.push($scope.todaytabdate);
			$scope.addFlag = true;
			$scope.previousDate = $scope.datesList[$scope.datesList.length - 1];
			$scope
					.findAllPatientGoalsByPatientIdAndCreatedDate($scope.previousDate);
		} else {
			toastr.options = {
				closeButton : true,
				progressBar : true,
				showMethod : 'slideDown',
				positionClass : "toast-top-right",
				timeOut : 2000
			};
			toastr.error('', 'Not allowed to add new goals in same date');
		}

	};
	$scope.removeTab = function(tab) {
		var index = tabs.indexOf(tab);
		tabs.splice(index, 1);
	};

	// //////////////////////////////////////////////////////////////////

	$scope.gotoDocuments = function() {
		$state.go('main.patientviewtabs.patient_documents');
	};
	$scope.gotoEvalution = function() {
		$state.go('main.patientviewtabs.patient_evaluation_sheet');
	};
	$scope.gotoGoals = function() {
		$state.go('main.patientviewtabs.patient_goals_sheet');
	};
	$scope.gotoProgress = function() {
		$state.go('main.patientviewtabs.patient_progress_notes');
	};
	$scope.gotoExit = function() {
		$state.go('main.patientviewtabs.patient_exit_note');
	};

	$scope.getAge = function() {

		var birthDate = document.getElementById('birth_date').value;
		var d = new Date(birthDate);
		var mdate = birthDate.toString();
		var yearThen = parseInt(mdate.substring(0, 4), 10);
		var monthThen = parseInt(mdate.substring(5, 7), 10);
		var dayThen = parseInt(mdate.substring(8, 10), 10);

		var today = new Date();
		var birthday = new Date(yearThen, monthThen - 1, dayThen);
		var differenceInMilisecond = today.valueOf() - birthday.valueOf();

		var year_age = Math.floor(differenceInMilisecond / 31536000000);
		var day_age = Math
				.floor((differenceInMilisecond % 31536000000) / 86400000);
		var month_age = Math.floor(day_age / 30);
		day_age = day_age % 30;
		var tMnt = (month_age + (year_age * 12));
		var tDays = (tMnt * 30) + day_age;
		if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
			document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
		} else {
			var age = tMnt + " months ";
			document.getElementsByName('age')[0].value = age;
			$scope.patient.age = age;
			/*
			 * document.getElementById("age").innerHTML = year_age + " years " +
			 * month_age + " months " + day_age + " days" + "<br/> or <br/> " +
			 * tMnt + " months " + day_age + " days" + "<br/> or <br/>" + tDays + "
			 * days" + "<br/> or <br/>" + tDays*24 + " hours" + "<br/> or
			 * <br/>" + tDays*24*3600 + " seconds" + "<br/> or <br/>" +
			 * tDays*24*3600*1000 + " miliseconds" ;
			 */
		}

	}

	/*
	 * $scope.labels1 = ['2006', '2007', '2008', '2009', '2010', '2011',
	 * '2012']; $scope.series1 = ['Series A'];
	 * 
	 * $scope.data1 = [ [65, 59, 80, 81, 56, 55, 40], ];
	 */

	$scope.getNewPatientsCount = function() {
		patientService.getNewPatientsCount().then(function(response) {
			$scope.count = response.data;
		}, function(error) {
		})
	};
	$scope.totalPatientsRegistered = function() {
		$scope.adminUserName = $rootScope.loggedUsername;
		patientService.totalPatientsRegistered($scope.adminUserName).then(
				function(response) {
					$scope.count = response.data;
				}, function(error) {
				})
	};

	$scope.patientGoalsInformation = function() {
		patientService.patientGoalsInformation($scope.patientObject.id).then(
				function(response) {
					$scope.labels4 = response.data.labels;
					$scope.series4 = response.data.series;
					$scope.data4 = response.data.data;

				}, function(error) {
				})
	};

	// added new Data..

	$scope.result = ''
	// $scope.details = ''
	$scope.options = {};

	$scope.form = {
		type : 'geocode',
		bounds : {
			SWLat : 49,
			SWLng : -97,
			NELat : 50,
			NELng : -96
		},
		country : 'ca',
		typesEnabled : false,
		boundsEnabled : false,
		componentEnabled : false,
		watchEnter : true
	}

	// watch form for changes
	$scope.watchForm = function() {
		return $scope.form
	};
	$scope.$watch($scope.watchForm, function() {
		$scope.checkForm()
	}, true);

	// set options from form selections
	$scope.checkForm = function() {

		$scope.options = {};

		$scope.options.watchEnter = $scope.form.watchEnter

		if ($scope.form.typesEnabled) {
			$scope.options.types = $scope.form.type
		}
		if ($scope.form.boundsEnabled) {

			var SW = new google.maps.LatLng($scope.form.bounds.SWLat,
					$scope.form.bounds.SWLng)
			var NE = new google.maps.LatLng($scope.form.bounds.NELat,
					$scope.form.bounds.NELng)
			var bounds = new google.maps.LatLngBounds(SW, NE);
			$scope.options.bounds = bounds

		}
		if ($scope.form.componentEnabled) {
			$scope.options.country = $scope.form.country
		}
	};
	$scope.getDoctorByPatientId = function() {
		patientService.findDoctorByPatientId($scope.patientObject.id).then(
				function(response) {
					$scope.doctorObj = response.data;
				}, function(error) {

				})
	};
	
	
	$scope.deleteDocumnetbyPatient = function(document) {
		patientService.deleteDocumnet(document.id).then(function(response) {
			if(document.documentType=="PATIENT"){
				$scope.getPatientDocuments("PATIENT");
			}
			if(document.documentType=="EVALUATION"){
					$scope.getEvaluationDocuments("EVALUATION");
				}
			if(document.documentType=="THERAPIST"){
						$scope.getTherapistDocuments("THERAPIST")
					}
				
			
		}, function(error) {
			console.log("Document Can't delete");
		})
	};
	
	$scope.deleteDocumentalert=function(document){
		alert("delete id is :::");
		swal({
			  title: "Are you sure?",
			  text: "Once deleted, you will not be able to recover this Document!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			})
			.then((willDelete) => {
			  if (willDelete) {
				$scope.deleteDocumnetbyPatient(document);
			
			    swal("Proof! Your Document has been deleted!", {
			      icon: "success",
			    });
			  } else {
			    swal("Your Document is safe!");
			  }
			});
	};

	$scope.gotoGoalTemplate = function() {
		$state.go('main.goalsTemplate', {
			Patient : $scope.patientObject
		})
	};

	$scope.deletePatientGoailById = function(goalId) {
		patientGoalService.deletePatientGoailById($scope.patientObject.id,goalId).then(function(repsonse) {
			/*toastr.options = {
					closeButton : true,
					progressBar : true,
					showMethod : 'slideDown',
					positionClass : "toast-top-right",
					timeOut : 2000
				};
				toastr.success('','Delete Goals to Specific patient Successfully');*/
			$scope.getAllPatientGoalByPatientId();
		}, function(error) {

		})
	};
	  
	  
	$scope.getAllPatientGoalByPatientId = function() {
		patientGoalService
				.getAllPatientGoalByPatientId($scope.patientObject.id).then(
						function(repsonse) {
							$scope.patientGoalList = repsonse.data;
						}, function(error) {

						})
	};

	// payments integration starts
	$scope.gotoPayments=function(){
		$state.go('main.payments');
	}
/////
	$scope.deletealert=function(id){
		swal({
			  title: "Are you sure?",
			  text: "Once deleted, you will not be able to recover this Goal!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
			})
			.then((willDelete) => {
			  if (willDelete) {
				$scope.deletePatientGoailById(id);
			    swal("Delete Goals to Specific patient Successfully!", {
			      icon: "success",
			    });
			  } else {
			    swal("Your Goal is safe!");
			  }
			});
	};
	/////
	
	/*payment integration starts*/
	
	  $http.defaults.headers.common['Content-Type']   = 'application/x-www-form-urlencoded';
	   $http.defaults.headers.common['Accept']         = 'application/json';
	
	   
	   $scope.chargeCard=function(token) {
		   var PaymentDto = {
				    "source": token,
				    "amount": 100, // amount in cents
				    "currency": "usd",
				    "description": "Your custom description here"
				  };
		   alert("chargeCard called;"+JSON.stringify(token));
			  const headers = new Headers({'token': token, 'amount': "100"});
			  return $http.post('http://localhost:9002/patientapp/payment/charge', PaymentDto).then(function(response){
				$scope.card= response.data;
				alert("$scope.card"+JSON.stringify($scope.card));
				console.log("$scope.card"+JSON.stringify($scope.card))
			  })
			};
	   
		var handler = StripeCheckout.configure({
		  key: 'pk_test_C1H7vgRUb4SedFm57Gj3woNn',
		  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
		  locale: 'auto',
		  token: function(token) {
			  console.log("token  "+JSON.stringify(token));
			  $scope.chargeCard(token.id);
		  }
		});

		$scope.clickOnPurchase=function(){
			 handler.open({
				    name: 'Stripe.com',
				    description: '2 widgets',
				    zipCode: true,
				    amount: 2000
				  });
		};
		
		// Close Checkout on page navigation:
		window.addEventListener('popstate', function() {
		  handler.close();
		});
	   
	
};
angular.module("HealthApplication").controller("PatientCtrl", PatientCtrl);
