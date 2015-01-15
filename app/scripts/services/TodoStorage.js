'use strict';

/**
 * @ngdoc service
 * @name todomvcApp.todoStorage
 * @description
 * # todoStorage
 * Service in the todomvcApp.
 */
angular.module('todomvc')
  .factory('todoStorage', function ($http, $injector) {

    return $http.get('/api')
      .then(function(){
        return $injector.get('api');
      }, function(){
        return $injector.get('localStorage');
      });
  })

  //.factory('api', function($http){
  //  'use strict';
  //  var store = {
  //    todos: [],
  //    clearCompleted: function(){},
  //    delete: function(){},
  //    get: function(){},
  //    insert: function(){},
  //    put: function(){}
  //  };
  //  return store;
  //})

  .factory('localStorage', function($q){
    var STORAGE_ID = 'todos-angularjs';
    var store = {
      todos: [],
      _getFromLocalStorage: function(){
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },
      _saveToLocalStorage: function(todos){
        localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
      },
      clearCompleted: function(){
        var dfd = $q.defer();
        var completeTodos = [];
        var incompleteTodos = [];
        store.todos.forEach(function(todo){
          if(todo.completed){
            completeTodos.push(todo);
          }else{
            incompleteTodos.push(todo);
          }
        });
        angular.copy(incompleteTodos, store.todos);
        store._saveToLocalStorage(store.todos);
        dfd.resolve(store.todos);
        return dfd.promise; // TODO
      },
      delete: function(todo){
        var dfd = $q.defer();
        store.todos.splice(store.todos.indexOf(todo), 1);
        store._saveToLocalStorage(store.todos);
        dfd.resolve(store.todos);
        return dfd.promise;
      },
      get: function(){
        var dfd = $q.defer();
        angular.copy(store._getFromLocalStorage(), store.todos);
        dfd.resolve(store.todos);
        return dfd.promise;
      },
      insert: function(todo){
        var dfd = $q.defer();
        store.todos.push(todo);
        store._saveToLocalStorage(store.todos);
        dfd.resolve(store.todos);
        return dfd.promise;
      },
      put: function(todo, index){
        var dfd = $q.defer();
        store.todos[index] = todo;
        store._saveToLocalStorage(store.todos);
        dfd.resolve(store.todos);
        return dfd.promise;
      }
    };
    return store;
  });
