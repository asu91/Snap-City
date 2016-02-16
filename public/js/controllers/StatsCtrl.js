angular.module('mvp.statsCtrl',[])
  .controller('StatsController', function($scope, EntryFactory){
    $scope.tagline = 'HI THERE';
    $scope.numbers = {};
    var initialize = function(){
      EntryFactory.get()
        .then(function(resp){
          console.log(resp.data, '<-----respdata')
          $scope.numbers = resp
        })
        .catch(function(err){
          console.error(err);
        })
    }
    initialize();
  });