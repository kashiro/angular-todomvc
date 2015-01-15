'use strict';

/**
 * @ngdoc overview
 * @name angularTodomvcApp
 * @description
 * # angularTodomvcApp
 *
 * Main module of the application.
 */
angular
  .module('angularTodomvcApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
