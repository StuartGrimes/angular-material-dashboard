(function() {

  angular
    .module('app')
    .controller('customerListController','CustomerDetailService', function($scope, $location) {
      $scope.redirectTo = function(sTargetPage) {
        console.log(sTargetPage);
        $location.path(sTargetPage);
      }
$scope.myData = 0;

    });


})();
