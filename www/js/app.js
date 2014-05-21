(function (angular) {

  'use strict';

  angular.module('radion', ['ionic', 'radion.controllers', 'radion.directives', 'redion.filters'])

  .run(['$ionicPlatform', function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  }])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.browse', {
        url: '/browse/:subId',
        views: {
          'mainContent' :{
            templateUrl: 'templates/browse.html',
            controller: 'BrowseCtrl'
          }
        }
      })

      .state('app.post', {
        url: '/post/:subId/:postId',
        views: {
          'mainContent' :{
            templateUrl: 'templates/post.html',
            controller: 'PostCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/browse/new');

  }]);

})(angular);
