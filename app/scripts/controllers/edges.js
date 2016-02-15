'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:EdgesController
 * @description
 * # EdgesController
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('EdgesController', function ($scope, edges, categories) {
        var selectedEdge = null;
        $scope.edges = edges.query();
        $scope.categories = categories.query();

        $scope.filterBy = {
            search: '',
            category: $scope.categories[0]
        };

        $scope.displayRequirements = function (reqs) {
            var result = '';
            for (var i=0; i< reqs.length; i++) {
                result += reqs[i].name + ' ';
            }

            return result;
        };

        $scope.isSelected = function (edge) {
            return selectedEdge === edge;
        };

        $scope.selectEdge = function (edge) {
            selectedEdge = (selectedEdge === edge) ? null:edge;
        };
    });
