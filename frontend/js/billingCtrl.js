angular.module('app')
.controller('billingCtrl', function($rootScope, $scope, mainSrvc, $location, $anchorScroll) {

  $scope.checked = true;

  $location.hash('top');
  $anchorScroll();

  $scope.uspsGround = {
    "name": "USPS Shipping",
    "price": 0.00
  }

  $scope.upsGround = {
    "name": "UPS Ground",
    "price": 7.00
  }

  $scope.upsSecondDay = {
    "name": "UPS Second Day",
    "price": 12.00
  }

  $scope.upsNextDay = {
    "name": "UPS Next Day Delivery",
    "price": 18.00
  }

});
