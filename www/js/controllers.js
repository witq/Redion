(function (angular) {

  'use strict';

  angular.module('radion.controllers', ['radion.services'])

  .controller('AppCtrl', ['$scope', function ($scope) {

  }])

  .controller('BrowseCtrl', [
    '$scope',
    '$stateParams',
    '$ionicLoading',
    'Reddit',
    function ($scope, $stateParams, $ionicLoading, Reddit) {
      $scope.data = {
        items: [],
        after: undefined
      };
      $scope.getData = function (showLoading) {
        if (!showLoading && showLoading !== false) {
          $ionicLoading.show({
            template: 'Loading...',
            noBackdrop: true
          });
        }
        Reddit
          .getAll($stateParams.subId)
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
    }
  ])

  .controller('PostCtrl', [
    '$scope',
    '$stateParams',
    '$ionicLoading',
    'Reddit', function ($scope, $stateParams, $ionicLoading, Reddit) {
      getData();
      function getData() {
        $ionicLoading.show({
          template: 'Loading...',
          noBackdrop: true
        });
        Reddit
          .getOne($stateParams.subId, $stateParams.postId)
          .success(function (response) {
            $scope.data = {
              post: response[0].data.children[0].data,
              comments: response[1].data.children
            };
            console.log($scope.data.post);
          })
          .error(function (response, status) {
            console.log('error', status);
          })
          .finally(function () {
            $ionicLoading.hide();
          });
      }
    }
  ]);

})(angular);
