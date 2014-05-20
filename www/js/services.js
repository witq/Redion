angular.module('radion.services', [])

.factory('Reddit', ['$http', function ($http) {
  var Reddit = function () {
    this.baseUrl = 'http://www.reddit.com/';
    this.jsonpCallback = '.json?jsonp=JSON_CALLBACK';
  };
  Reddit.prototype.getAll = function (subId) {
    if (!subId) subId = 'new';
    return $http({
      method: 'JSONP',
      url: [this.baseUrl, subId, this.jsonpCallback].join('')
    });
  };
  Reddit.prototype.getOne = function (postId) {
    if (!id) return;
    // this method will return post details and comments
  };
  return new Reddit();
}]);
