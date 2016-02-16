angular.module('autoMedic')
  .controller('historyController', historyController);

historyController.$inject = [
	'$scope',
	'_med',

	'dispensed',
	'ngTableParams',
	'$filter'
];

function historyController($scope, _med, dispensed, ngTableParams, $filter){
	$scope.dispensed = dispensed.data;

}
