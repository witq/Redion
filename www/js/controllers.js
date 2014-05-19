angular.module('radion.controllers', ['radion.services'])

.controller('AppCtrl', ['$scope', function ($scope) {

}])

.controller('BrowseCtrl', ['$scope', 'Reddit', function ($scope, Reddit) {
  Reddit
    .getAll('new')
    .success(function (response) {
      if (response.kind === 'Listing' && response.data) {
        $scope.data = response.data.children;
      }
    })
    .error(function (response, status) {
      console.log('error', status);
    });
}])

.controller('PlaylistsCtrl', ['$scope', function ($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

}])

.controller('PlaylistCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}]);
