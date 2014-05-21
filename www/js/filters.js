(function (angular, moment) {

  'use strict';

  angular.module('redion.filters', [])

  .filter('moment', function () {
    return function (input, format) {
      if (!input || !format) {
        return input;
      } else {
        return moment(input).format(format);
      }
    };
  });

}(angular, moment));
