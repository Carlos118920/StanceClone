angular.module('app')
.controller('accountCtrl', function($rootScope, $scope, mainSrvc) {

  $scope.test = 'account working';
  $scope.test2 = mainSrvc.test;

  $scope.isShown = true;
  $scope.isShown2 = true;
  $scope.isShown3 = true;
  $scope.isShown4 = true;
});
