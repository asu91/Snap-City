angular.module('MVP', ['ngRoute', 'mvp.mainCtrl', 'mvp.entryCtrl', 'mvp.factory', 'mvp.statsCtrl'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html',
        controller: 'MainController'
      })
      .when('/entry', {
        templateUrl: '/views/entry.html',
        controller: 'EntryController'
      })
      .when('/stats', {
        templateUrl: '/views/stats.html',
        controller: 'StatsController'
      });

    // $locationProvider.html5Mode(true);
  });