(function (angular) {

  'use strict';

  var Reddit = function ($http) {

    this._baseUrl = 'http://www.reddit.com/';
    this._jsonpCallback = '.json?jsonp=JSON_CALLBACK';
    this._http = $http;

  };

  Reddit.prototype.getAll = function (subId) {
    if (!subId) subId = 'new';
    return this._http.jsonp([
      this.baseUrl,
      subId,
      this.jsonpCallback
    ].join(''));
  };

  Reddit.prototype.getOne = function (subreddit, postId) {
    if (!postId) return;
    return this._http.jsonp([
      this.baseUrl,
      'r/',
      subreddit,
      '/comments/',
      postId,
      this.jsonpCallback
    ].join(''));
  };

  angular.module('radion.services', [])
    .service('Reddit', ['$http', Reddit]);

})(angular);
