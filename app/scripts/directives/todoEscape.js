'use strict';

/**
 * @ngdoc directive
 * @name todomvcApp.directive:todoEscape
 * @description
 * # todoEscape
 */
angular.module('todomvc')
  .directive('todoEscape', function() {

    var ESCAPE_KEY = 27;

    return function(scope, elem, attrs) {
      elem.bind('keydown', function(event) {
        if(event.keyCode === ESCAPE_KEY){
          scope.$apply(attrs.todoEscape);
        }
      });
    };
  });
