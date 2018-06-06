// for  routing2 is used to navigate  index to signup page...........

var myApp = angular.module('HealthApplication', ['ui.router','mwl.calendar','ngStorage','ngMaterial','ngAnimate',
    'ngAria','ui.bootstrap', 'colorpicker.module','ngSanitize','chart.js','xeditable',
    'ngMessages','mdPickers','checklist-model','ui.bootstrap.datetimepicker','angucomplete-alt','ngAutocomplete','dx']);  
myApp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
	$urlRouterProvider.otherwise('/signup');
	$stateProvider.state('login', {
		url : '/login',
		templateUrl : 'views/account/login/login.html',
		controller : 'loginCtrl'
	}).state('healthapp', {
		url : '/healthapp',
		templateUrl : 'views/account/login/HealthApp.html',
		controller : 'loginCtrl'
	}).state('signup', {
		url : '/signup',
		templateUrl : 'views/account/signup/signup.html',
		controller : 'signupCtrl'
	}).state('blank', {
		url : '/blank',
		templateUrl : 'views/account/signup/blank.html',
		controller : 'signupCtrl',
		params:{
			signupUser: null,
			PackagePrice:null,
			cmpType:null
		}
	}).state('forgotpassword', {
		url : '/forgotpassword',
		templateUrl : 'views/account/forgotpassword/forgot_password.html',
		controller : 'forgotpasswordCtrl'
	}).state('otp', {
		url : '/otp',
		templateUrl : 'views/otp/otp.html',
		controller : 'otpCtrl',
		params:{
			UserObject:null
		}
	}).state('main', {
		url : '/main',
		templateUrl : 'views/main.html',
		abstract:true,
		controller : 'loginCtrl'
	}).state('main.dashboard', {
		url : '/dashboard',
		templateUrl : 'views/dashboard/dashboard.html',
		controller : 'loginCtrl'
	}).state('main.changepassword', {
		url : '/changepassword', 
		templateUrl : 'views/companysetup/companymanagement/change_password.html',
		controller : 'changepasswordCtrl'
	}).state('main.add_patient', {
		url : '/add_patient',
		templateUrl : 'views/patient/add_patient.html',
		controller : 'PatientCtrl'
	}).state('main.patient_list', {
		url : '/patient_list',
		templateUrl : 'views/patient/patient_list.html',
		controller : 'PatientCtrl'
	}).state('main.patientviewtabs', {
		url : '/patient_view',
		templateUrl : 'views/patient_viewmore.html',
		abstract:true,
		controller : 'PatientCtrl'
	}).state('main.patientviewtabs.patient_documents', {
		url : '/patient_documents',
		templateUrl : 'views/patient/patient_documents.html',
		controller : 'PatientCtrl',
		params:{
			patientObject:null
		}
	}).state('main.patientviewtabs.patient_evaluation_sheet', {
		url : '/patient_evaluation_sheet',
		templateUrl : 'views/patient/patient_evaluation_sheet.html',
		controller : 'PatientCtrl',
		params:{
			patientObject:null
		}
	}).state('main.patientviewtabs.patient_goals_sheet', {
		url : '/patient_goals_sheet',
		templateUrl : 'views/patient/patient_goals_sheet.html',
		controller : 'PatientCtrl',
		params:{
			patientObject:null
		}
	}).state('main.patientviewtabs.patient_progress_notes', {
		url : '/patient_progress_notes',
		templateUrl : 'views/patient/patient_progress_notes.html',
		controller : 'PatientCtrl',
		params:{
			patientObject:null
		}
	}).state('main.patientviewtabs.patient_exit_note', {
		url : '/patient_exit_note',
		templateUrl : 'views/patient/patient_exit_note.html',
		controller : 'PatientCtrl',
		params:{
			patientObject:null
		}
	}).state('main.updatePatient', {
		url : '/updatePatient',
		templateUrl : 'views/patient/updatePatient.html',
		controller : 'PatientCtrl',
		params:{
			patientObject:null
		}
		
	})
	.state('main.department_list', {
		url : '/department_list',
		templateUrl : 'views/companysetup/departmentmanagement/department_list.html',
		controller : 'loginCtrl'
	}).state('main.add_department', {
		url : '/add_department',
		templateUrl : 'views/companysetup/departmentmanagement/add_department.html',
		controller : 'loginCtrl'
	})
	.state('main.update_companymanagement', {
		url : '/update_companymanagement',
		templateUrl : 'views/companysetup/companymanagement/company_management.html',
		controller : 'companyCtrl'
	}).state('main.subscripton', {
		url : '/subscripton',
		templateUrl : 'views/companysetup/subscription/pricing.html',
		controller : 'loginCtrl'
	}).state('main.appointment', {
		url : '/appointment',
		templateUrl : 'views/appointment/appointment.html',
		controller : 'appointmentCtrl'
			
	}).state('main.add_appointment', {
		url : '/add_appointment',
		templateUrl : 'views/appointment/add_appointment.html',
		controller : 'appointmentCtrl',
		params:{
			selectScheduleObj:null,
			stDate:null,
			enddate:null,
			startTime:null
		}
			
	}).state('main.appointment_list', {
		url : '/appointment_list',
		templateUrl : 'views/appointment/appointment_list.html',
		controller : 'appointmentCtrl'
	}).state('main.updateappointment', {
		url : '/updateappointment',
		templateUrl : 'views/appointment/update_appointment.html',
		controller : 'appointmentCtrl',
		params:{
			appointmentObj:null
		}
	}).state('main.add_appointmentForCalender', {
		url : '/add_appointmentForCalender',
		templateUrl : 'views/appointment/add_appointmentForCalender.html',
		controller : 'appointmentCtrl',
		params:{
			calenderScheduleObj:null
		}
			
	}).state('main.add_appoinment', {
		url : '/add_appoinment',
		templateUrl : 'views/appointment/add_appointment2.html',
		controller : 'appointmentCtrl',
		params:{
			selectScheduleObj:null,
			stDate:null,
			enddate:null
		}
			
	})
	.state('main.calender', {
		url : '/calender',
		templateUrl : 'views/calender/calender.html',
		controller : 'calenderCtrl'
	})
	.state('main.companyname', {
		url : '/companyname',
		templateUrl : 'views/masters/companynames/Company_Names.html',
		controller : 'loginCtrl'
	}).state('main.companytype', {
		url : '/companytype',
		templateUrl : 'views/masters/companytypes/Client_TypesMaster.html',
		controller : 'loginCtrl'
	}).state('main.subscription', {
		url : '/subscription',
		templateUrl : 'views/masters/subscriptionmaster/Subscription_Master.html',
		controller : 'loginCtrl'
	}).state('main.addclienttype', {
		url : '/addclienttype',
		templateUrl : 'views/masters/clientTypes/addClientTypesMaster.html',
		controller : 'clientTypeCtrl'
	}).state('main.updateclienttype', {
		url : '/updateclienttype',
		templateUrl : 'views/masters/clientTypes/updateclienttype.html',
		controller : 'clientTypeCtrl',
		params:{
			clientTypeObj:null
		}
	}).state('main.clienttypelist', {
		url : '/clienttypelist',
		templateUrl : 'views/masters/clientTypes/clienttypelist.html',
		controller : 'clientTypeCtrl'
	}).state('main.addRole', {
		url : '/addRole',
		templateUrl : 'views/masters/role/addRole.html',
		controller : 'roleCtrl'
	}).state('main.updateRole', {
		url : '/updateRole',
		templateUrl : 'views/masters/role/updateRole.html',
		controller : 'roleCtrl',
		params:{
			roleObj:null
		}
	}).state('main.roleist', {
		url : '/roleist',
		templateUrl : 'views/masters/role/roleist.html',
		controller : 'roleCtrl'
	}).state('main.addRoleFeature', {
		url : '/addRoleFeature',
		templateUrl : 'views/masters/role/addRoleFeature.html',
		controller : 'roleCtrl'
	}).state('main.roleFeature', {
		url : '/roleFeature',
		templateUrl : 'views/masters/role/roleFeatures.html',
		controller : 'roleCtrl'
	}).state('main.viewRoleFeature', {
		url : '/viewRoleFeature',
		templateUrl : 'views/masters/role/viewRoleFeature.html',
		controller : 'roleCtrl',
		params:{
			viewRoleObj:null
		}
	}).state('main.updateRoleFeature', {
		url : '/updateRoleFeature',
		templateUrl : 'views/masters/role/updateRoleFeature.html',
		controller : 'roleCtrl',
		params:{
			updateRoleFeatureObj:null
		}
	}).state('main.addCompanyType', {
		url : '/addCompanyType',
		templateUrl : 'views/masters/companytypes/addCompanyType.html',
		controller : 'companyTypeCtrl'
	}).state('main.updateCompanyType', {
		url : '/updateCompanyType',
		templateUrl : 'views/masters/companytypes/updateCompanyType.html',
		controller : 'companyTypeCtrl',
		params:{
			companyTypeObj:null
		}
	}).state('main.companyTypesList', {
		url : '/companyTypesList',
		templateUrl : 'views/masters/companytypes/companyTypesList.html',
		controller : 'companyTypeCtrl'
			
	}).state('main.addSubscriptionMaster', {
		url : '/addSubscriptionMaster',
		templateUrl : 'views/masters/subscriptionmaster/addSubscriptionMaster.html',
		controller : 'subscriptionMasterCtrl'
	}).state('main.updateSubscriptionMaster', {
		url : '/updateSubscriptionMaster',
		templateUrl : 'views/masters/subscriptionmaster/updateSubscriptionMaster.html',
		controller : 'subscriptionMasterCtrl',
		params:{
			subscriptionObj:null
		}
	}).state('main.subscriptionMasterList', {
		url : '/subscriptionMasterList',
		templateUrl : 'views/masters/subscriptionmaster/subscriptionMasterList.html',
		controller : 'subscriptionMasterCtrl'
	
	}).state('main.addCategory', {
		url : '/addCategory',
		templateUrl : 'views/masters/category/addCategory.html',
		controller : 'categoryCtrl'
	}).state('main.updateCategory', {
		url : '/updateCategory',
		templateUrl : 'views/masters/category/updateCategory.html',
		controller : 'categoryCtrl',
		params:{
			categoryObj:null
		}
	}).state('main.categoryList', {
		url : '/categoryList',
		templateUrl : 'views/masters/category/categoryList.html',
		controller : 'categoryCtrl'
	}).state('main.addPackageSubscription', {
		url : '/addPackageSubscription',
		templateUrl : 'views/packages/packagesubscription/addPackageSubscription.html',
		controller : 'packageSubscriptionCtrl'
	}).state('main.updatePackageSubscription', {
		url : '/updatePackageSubscription',
		templateUrl : 'views/packages/packagesubscription/updatePackageSubscription.html',
		controller : 'packageSubscriptionCtrl',
		params:{
			packageSubscriptionObj:null
		}
	}).state('main.packageSubscriptionList', {
		url : '/packageSubscriptionList',
		templateUrl : 'views/packages/packagesubscription/packageSubscriptionList.html',
		controller : 'packageSubscriptionCtrl'
	}).state('main.addDepartment', {
		url : '/addDepartment',
		templateUrl : 'views/companysetup/departmentmanagement/addDepartment.html',
		controller : 'departmentCtrl'
	}).state('main.updateDepartment', {
		url : '/updateDepartment',
		templateUrl : 'views/companysetup/departmentmanagement/updateDepartment.html',
		controller : 'departmentCtrl',
		params:{
			departmentObj:null
		}
	}).state('main.departmentlist', {
		url : '/departmentlist',
		templateUrl : 'views/companysetup/departmentmanagement/departmentlist.html',
		controller : 'departmentCtrl'
	}).state('main.addPackageNameMaster', {
		url : '/addPackageNameMaster',
		templateUrl : 'views/packages/packageNameMaster/addPackageNameMaster.html',
		controller : 'packageMasterCtrl'
	}).state('main.updatepackageNameMaster', {
		url : '/updatepackageNameMaster',
		templateUrl : 'views/packages/packageNameMaster/updatepackageNameMaster.html',
		controller : 'packageMasterCtrl',
		params:{
			packageMasterObj:null
		}
	}).state('main.packagePricingList', {
		url : '/packagePricingList',
		templateUrl : 'views/packages/packagepricing/packagePricingList.html',
		controller : 'packagePricingCtrl'
	}).state('main.addPackagePricing', {
		url : '/addPackagePricing',
		templateUrl : 'views/packages/packagepricing/addPackagePricing.html',
		controller : 'packagePricingCtrl'
	}).state('main.updatePackagePricing', {
		url : '/updatepackagePricing',
		templateUrl : 'views/packages/packagepricing/updatePackagePricing.html',
		controller : 'packagePricingCtrl',
		params:{
			packagePricingObj:null
		}
	}).state('main.packageNameMasterlist', {
		url : '/packageNameMasterlist',
		templateUrl : 'views/packages/packageNameMaster/packageNameMasterList.html',
		controller : 'packageMasterCtrl'
	}).state('main.addPackageDiscount', {
		url : '/addPackageDiscount',
		templateUrl : 'views/packages/packageDiscount/addPackageDiscount.html',
		controller : 'packageDiscountCtrl'
	}).state('main.updatePackageDiscount', {
		url : '/updatePackageDiscount',
		templateUrl : 'views/packages/packageDiscount/updatePackageDiscount.html',
		controller : 'packageDiscountCtrl',
		params:{
			packageDiscountObj:null
		}
	}).state('main.packageDiscountlist', {
		url : '/packageDiscountlist',
		templateUrl : 'views/packages/packageDiscount/packageDiscountlist.html',
		controller : 'packageDiscountCtrl'
	}).state('main.add_usermanagement', {
		url : '/add_usermanagement',
		templateUrl : 'views/companysetup/usermanagement/add_usermanagement.html',
		controller : 'userManagementCtrl'
	}).state('main.updateUserMangement', {
		url : '/updateUserMangement',
		templateUrl : 'views/companysetup/usermanagement/updateUserMangement.html',
		controller : 'userManagementCtrl',
		params:{
			userObj:null
		}
	}).state('main.usermanagement_list', {
		url : '/usermanagement_list',
		templateUrl : 'views/companysetup/usermanagement/usermanagement_list.html',
		controller : 'userManagementCtrl'
	}).state('main.evaluation', {
		url : '/evaluation',
		templateUrl : 'views/template/evaluation.html',
		controller : 'evalutionCtrl'
	}).state('main.addSite', {
		url : '/addSite',
		templateUrl : 'views/companysetup/sitemanagement/addSite.html',
		controller : 'siteCtrl'
	}).state('main.updateSite', {
		url : '/updateSite',
		templateUrl : 'views/companysetup/sitemanagement/updateSite.html',
		controller : 'siteCtrl',
		params:{
			siteObj:null
		}
	}).state('main.siteList', {
		url : '/siteList',
		templateUrl : 'views/companysetup/sitemanagement/siteList.html',
		controller : 'siteCtrl'

	}).state('main.addEvalutionCategory', {
		url : '/addEvalutionCategory',
		templateUrl : 'views/template/evalutioncategory/addEvalutionCategory.html',
		controller : 'evalutionCategoryCtrl'
	}).state('main.updateEvalutionCategory', {
		url : '/updateEvalutionCategory',
		templateUrl : 'views/template/evalutioncategory/updateEvalutionCategory.html',
		controller : 'evalutionCategoryCtrl',
		params:{
			evalutionCategoryObj:null
		}
	}).state('main.evalutionCategoryList', {
		url : '/evalutionCategoryList',
		templateUrl : 'views/template/evalutioncategory/evalutionCategoryList.html',
		controller : 'evalutionCategoryCtrl'
			
	}).state('main.addEvalutionQuestion', {
		url : '/addEvalutionQuestion',
		templateUrl : 'views/template/evalutionquestion/addEvalutionQuestion.html',
		controller : 'evalutionQuestionCtrl'
	}).state('main.updateEvalutionQuestion', {
		url : '/updateEvalutionQuestion',
		templateUrl : 'views/template/evalutionquestion/updateEvalutionQuestion.html',
		controller : 'evalutionQuestionCtrl',
		params:{
			evalutionQuestionObj:null
		}
	}).state('main.evalutionQuestionList', {
		url : '/evalutionQuestionList',
		templateUrl : 'views/template/evalutionquestion/evalutionQuestionList.html',
		controller : 'evalutionCtrl'

	}).state('main.add_therapist', {
		url : '/add_therapist',
		templateUrl : 'views/therapist/add_therapist.html',
		controller : 'therapistCtrl'
	}).state('main.updateTherapist', {
		url : '/updateTherapist',
		templateUrl : 'views/therapist/updateTherapist.html',
		controller : 'therapistCtrl',
		params:{
			therapistObj:null
		}
	}).state('main.therapist_list', {
		url : '/therapist_list',
		templateUrl : 'views/therapist/therapist_list.html',
		controller : 'therapistCtrl'
			

	}).state('main.addHolidays', {
		url : '/addHolidays',
		templateUrl : 'views/holidays/add_holiday.html',
		controller : 'holidaysCtrl'
	}).state('main.updateHolidays', {
		url : '/updateHolidays',
		templateUrl : 'views/holidays/updateHolidays.html',
		controller : 'holidaysCtrl',
		params:{
			holidaysObj:null
		}
	}).state('main.holidaysList', {
		url : '/holidaysList',
		templateUrl : 'views/holidays/holidaysList.html',
		controller : 'holidaysCtrl'
	}).state('main.addTherapistHolidays', {
		url : '/addTherapistHolidays',
		templateUrl : 'views/holidays/therapistHolidays.html',
		controller : 'therapistHolidaysCtrl'
	}).state('main.holidaysListAdmin', {
		url : '/holidaysListAdmin',
		templateUrl : 'views/holidays/therapistHolidaysList.html',
		controller : 'therapistHolidaysCtrl'
	}).state('main.addSchedule', {
		url : '/addSchedule',
		templateUrl : 'views/schedule/addSchedule.html',
		controller : 'scheduleCtrl'
	}).state('main.updateSchedule', {
		url : '/updateSchedule',
		templateUrl : 'views/schedule/updateSchedule.html',
		controller : 'scheduleCtrl',
		params:{
			scheduleObj:null
		}
	}).state('main.scheduleList', {
		url : '/scheduleList',
		templateUrl : 'views/schedule/scheduleList.html',
		controller : 'scheduleCtrl'
	}).state('main.addTherapistSchedule', {
		url : '/addTherapistSchedule',
		templateUrl : 'views/schedule/therapistSchedeule.html',
		controller : 'therapistScheduleCtrl'
	}).state('main.scheduleListAdmin', {
		url : '/scheduleListAdmin',
		templateUrl : 'views/schedule/therapistScheduleList.html',
		controller : 'therapistScheduleCtrl'
	}).state('main.addtemplate', {
		url : '/addtemplate',
		templateUrl : 'views/templateSheet/evalutionTemplate.html',
		controller : 'templateCtrl'
	}).state('main.templateList', {
		url : '/templateList',
		templateUrl : 'views/templateSheet/evalutionTemplate.html',
		controller : 'templateCtrl'
	}).state('main.evalutionTemplate', {
		url : '/evalutionTemplate',
		templateUrl : 'views/templateSheet/evalutionTemplate.html',
		controller : 'evalutionCtrl'
	})
	.state('main.goalsTemplate', {
		url : '/goalsTemplate',
		templateUrl : 'views/templateSheet/goalsTemplate.html',
		controller : 'goalTemplateCtrl',
		params:{
			Patient:null
		}
	}).state('main.dynamicTemplate', {
		url : '/dynamicTemplate',
		templateUrl : '/views/template/dynamicTemplate/dynamicTemplate.html',
		controller : 'userManagementCtrl'
	}).state('main.updateGoalTemplate', {
		url : '/updateGoalTemplate',
		templateUrl : 'views/templateSheet/updateGoalTemplate.html',
		controller : 'goalTemplateCtrl',
		params:{
			goalObj:null
		}
	}).state('main.calender2', {
		url : '/calender2',
		templateUrl : 'views/calender/calender2.html',
		controller : 'calendarCtrl'
	}).state('main.model', {
		url : '/model',
		templateUrl : 'views/calender/modalContent.html',
		controller : 'calendarCtrl'
	}).state('main.registeredCompanies', {
		url : '/registeredCompanies',
		templateUrl : 'views/companysetup/usermanagement/registeredCompanies.html',
		controller : 'userManagementCtrl'
	}).state('main.ParentMilestones', {
		url : '/ParentMilestones',
		templateUrl : 'views/parent/ParentMilestones.html',
		controller : 'userManagementCtrl'
	}).state('main.ChildObservation', {
		url : '/ChildObservation',
		templateUrl : 'views/parent/ChildObservation.html',
		controller : 'userManagementCtrl'
	}).state('main.ScreeningTest', {
		url : '/ScreeningTest',
		templateUrl : 'views/parent/ScreeningTest.html',
		controller : 'userManagementCtrl'
	}).state('main.ParentDashboard', {
		url : '/ParentDashboard',
		templateUrl : 'views/parent/dashbordParent.html/ParentDashboard.html',
		controller : 'loginCtrl'
	}).state('main.searchSchedule', {
		url : '/searchSchedule',
		templateUrl : 'views/schedule/schedulesByDate.html',
		controller : 'appointmentCtrl',
		params:{
			scheduleListByDate:null,
			stDate:null,
			enddate:null
		}
	}).state('main.payments', {
		url : '/payments',
		templateUrl : 'views/payments/payments.html',
		controller : 'PatientCtrl'
	}).state('main.mypayments', {
		url : '/mypayments',
		templateUrl : 'views/payments/mypayments.html',
		controller : 'loginCtrl'
	}).state('main.renewalpayments', {
		url : '/renewalpayments',
		templateUrl : 'views/payments/renewalpayments.html',
		controller : 'packagePricingCtrl'
	}).state('main.listofpayments', {
		url : '/listofpayments',
		templateUrl : 'views/payments/listofpayments.html',
		controller : 'loginCtrl'
	});
	
}).run(function($rootScope, $localStorage, $location) {
	$rootScope.$on("$locationChangeStart", function(event, next, current) {
		if ($localStorage.user == undefined) {
			$location.path('/signup');
		}
		if ($rootScope.loggedUsername == undefined || $rootScope.loggedUserRole == undefined) {
			$location.path('/signup');
		}
	});
});
angular.module('HealthApplication').config(['$compileProvider', function($compileProvider) { $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|fil‌​e|ftp|blob):|data:im‌​age\//); } ]); 
