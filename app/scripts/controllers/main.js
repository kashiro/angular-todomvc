'use strict';

/**
 * @ngdoc function
 * @name angularTodomvcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTodomvcApp
 */
angular.module('angularTodomvcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
