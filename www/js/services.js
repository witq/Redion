angular.module('radion.services', [])

.factory('Reddit', ['$http', function ($http) {
  return {
    getAll: function (subId, after) {
      if (!subId) subId = 'new';
      if (after) {
        after = '&after=' + after;
      } else {
        after = '';
      }
      var url = 'http://www.reddit.com/' + subId + '.json?jsonp=JSON_CALLBACK' + after;
      return $http({
        method: 'JSONP',
        url: url
      });
    }
  };
}]);
