(function() {

  angular
    .module('app')
    .controller('crmDetailController', function($scope, $stateParams, $state) {

      console.log($state);
      console.log($stateParams);
      // $scope.idToShow = $stateParams;

    });




})();
