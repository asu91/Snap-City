angular.module('appRoutes', [])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
      })
      .when('/entry', {
        templateUrl: 'views/entry.html',
        controller: 'EntryController'
      });

    $locationProvider.html5Mode(true);
  });