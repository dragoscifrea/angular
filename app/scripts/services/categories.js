'use strict';

angular.module('angularApp').service('categories', function () {
  this.query = function () {
    return [
      {
          name: 'All'
      },
      {
          name: 'Background'
      },
      {
          name: 'Background2'
      },
      {
          name: 'Background3'
      }
    ];
  };
});
