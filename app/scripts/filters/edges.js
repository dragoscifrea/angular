'use strict';

angular.module('angularApp').filter('edges', function () {
  return function (edges, filterBy) {
    return edges.filter(function (element, index, array) {
      if (filterBy.category.name === 'All') {
        return element.category.name;
      } else {
          return element.category.name ===  filterBy.category.name;
      }
    })
  }
});
