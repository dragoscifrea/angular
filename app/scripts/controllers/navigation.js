'use strict';

angular.module('angularApp').controller('NavigationController', function ($scope, $location) {
    $scope.isActive = function (path) {
        return path ===  $location.path();
    }
});
