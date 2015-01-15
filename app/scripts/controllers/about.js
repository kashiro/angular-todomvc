'use strict';

/**
 * @ngdoc function
 * @name angularTodomvcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTodomvcApp
 */
angular.module('angularTodomvcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
