angular.module('radion.services', [])

.factory('Reddit', ['$http', function ($http) {
  return {
    getAll: function (subId) {
      if (!subId) {
        subId = 'new';
      }
      return $http({
        method: 'GET',
        url: 'http://www.reddit.com/' + subId + '.json'
      });
    }
  };
}]);
