'use strict';

/**
 * @ngdoc directive
 * @name todomvc.directive:todoFocus
 * @description
 * # todoFocus
 */
angular.module('todomvc')
.directive('todoFocus', function($timeout) {

    return function(scope, elem, attrs){
      scope.$watch(attrs.todoFocus, function(newVal){
        if(newVal){
          $timeout(function(){
            elem[0].focus();
          }, 0, false);
          // TODO falseの意味
        }
      });
    };
  });
