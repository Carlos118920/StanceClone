angular.module('app')
.controller('singleProductCtrl', function($scope, mainSrvc, $stateParams) {

  $scope.pic1 = true;

  $scope.getSingleProduct = () => {
    mainSrvc.getSingleProduct($stateParams.id).then(function(response) {
      $scope.singleProduct = response;
    });
  }
  $scope.getSingleProduct();

  // $scope.getProducts = () => {
  //   mainSrvc.getProducts($stateParams.mwk).then(function(response) {
  //     console.log(response);
  //     $scope.random = response;
  //   });
  // }
  // $scope.getProducts();

  $scope.showHide = (pic) => {
    $scope.pic1 = false;
    $scope.pic2 = false;
    $scope.pic3 = false;
    $scope[pic] = true;
  };

});
