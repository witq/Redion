angular.module('radion.services', [])

.factory('Reddit', ['$http', function ($http) {
  return {
    getAll: function (subId) {
      if (!subId) subId = 'new';
      var url = 'http://www.reddit.com/' + subId + '.json?jsonp=JSON_CALLBACK';
      return $http({
        method: 'JSONP',
        url: url,
        cache: true
      });
    }
  };
}]);
