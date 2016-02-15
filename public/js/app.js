angular.module('MVP', ['ngRoute', 'mvp.mainCtrl', 'mvp.entryCtrl', 'mvp.factory'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html',
        controller: 'MainController'
      })
      .when('/entry', {
        templateUrl: '/views/entry.html',
        controller: 'EntryController'
      });

    // $locationProvider.html5Mode(true);
  });