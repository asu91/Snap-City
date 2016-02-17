angular.module('MVP', ['ngRoute', 'mvp.mainCtrl', 'mvp.entryCtrl', 'mvp.factory', 'mvp.statsCtrl', 'mvp.services'])
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
      })
      .when('/signin', {
        templateUrl: '/views/signin.html',
        controller: 'StatsController'
      })
      .when('/signup', {
        templateUrl: '/views/signup.html',
        controller: 'StatsController'
      });

    // $locationProvider.html5Mode(true);
  });