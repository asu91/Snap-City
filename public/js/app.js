angular.module('MVP', ['ngRoute', 'mvp.mainCtrl', 'mvp.entryCtrl', 'mvp.factory', 'mvp.statsCtrl', 'mvp.services', 'mvp.onerep', 'mvp.onerepfac'])
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
      })
      .when('/1RM', {
        templateUrl: '/views/onerepmax.html',
        controller: 'OneRep'
      });

    // $locationProvider.html5Mode(true);
  });