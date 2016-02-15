'use strict';

angular.module('angularApp').directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/navbar.html',
      controller: 'NavigationController'
    }
})
