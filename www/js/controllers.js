angular.module('radion.controllers', ['radion.services'])

.controller('AppCtrl', ['$scope', function ($scope) {

}])

.controller('BrowseCtrl', ['$scope', '$ionicLoading', 'Reddit', function ($scope, $ionicLoading, Reddit) {
  $scope.data = {
    items: [],
    after: undefined
  };
  $scope.getData = function (showLoading) {
    if (!showLoading && showLoading !== false) {
      $ionicLoading.show({
        template: 'Loading...'
      });
    }
    Reddit
      .getAll('new')
      .success(function (response) {
        if (response.kind === 'Listing' && response.data) {
          $scope.data = {
            items: response.data.children,
            after: response.data.after
          };
        }
      })
      .error(function (response, status) {
        console.log('error', status);
      })
      .finally(function () {
        $ionicLoading.hide();
        $scope.$broadcast('scroll.refreshComplete');
      });
  };
  $scope.getData();
}])

.controller('SingleCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}]);
