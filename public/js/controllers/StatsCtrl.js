angular.module('mvp.statsCtrl',[])
  .controller('StatsController', function($scope, EntryFactory){
    $scope.tagline = 'HI THERE';
    $scope.numbers = {};
    var initialize = function(){
      EntryFactory.get()
        .then(function(resp){
          console.log(resp.data, '<-----respdata')
          $scope.numbers = resp.data
        })
        .catch(function(err){
          console.error(err);
        })

    }
    initialize();

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };


  
  });