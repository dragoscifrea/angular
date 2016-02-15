'use strict';

/**
 * @ngdoc function
 * @name angularApp.services:edges
 * @description
 * # edges
 * Edges data
 */
angular.module('angularApp').service('edges', function () {
    this.query = function () {
        return  [
                {
                    name: 'Attractive',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    category: {
                        name: 'Background'
                    },
                    requirements: [
                        {name: 'Test', value: 'Novice'},
                        {name: 'Vigor', value: 'd6'}
                    ]
                },
                {
                    name: 'Pamant',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    category: {
                        name: 'Background2'
                    },
                    requirements: [
                        {name: 'Test2', value: 'Novice2'},
                        {name: 'Vigor2', value: 'd62'}
                    ]
                },
                {
                    name: 'Iuan',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    category: {
                        name: 'Background3'
                    },
                    requirements: [
                        {name: 'Test2', value: 'Novice2'},
                        {name: 'Vigor2', value: 'd62'}
                    ]
                }
            ];
    };
});
