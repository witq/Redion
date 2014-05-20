angular.module('radion.directives', [])

.directive('fadeBar', ['$timeout', '$ionicSideMenuDelegate', function ($timeout, $ionicSideMenuDelegate) {
  return {
    restrict: 'E',
    template: '<div class="fade-bar"></div>',
    replace: true,
    link: function ($scope, $element) {
      $timeout(function () {
        $scope.$watch(function () {
          return $ionicSideMenuDelegate.getOpenRatio();
        }, function (ratio) {
          $element[0].style.opacity = Math.abs(ratio);
        });
      });
    }
  };
}]);
