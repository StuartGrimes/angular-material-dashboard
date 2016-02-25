(function() {

  angular
    .module('app')
    .controller('customerListController', function($scope, $location, RemoteDataService) {

      $scope.redirectTo = function(sTargetPage) {
        console.log(sTargetPage);
        $location.path(sTargetPage);
      }

      //var myData = RemoteDataService.myData;

      // Manage data function

      RemoteDataService.getData()
        .then(RemoteDataService.showData)
        .then(function(oParsedData){
          $scope.myData = oParsedData;
          console.log($scope.myData);
          $scope.$apply();
        })

    });

})();
