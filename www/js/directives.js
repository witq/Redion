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
          // if (ratio >= 0.5) ratio = 0.5;
          $element[0].style.opacity = Math.abs(ratio);
        });
      });
    }
  };
}]);
