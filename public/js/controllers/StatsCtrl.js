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

      zingchart.render({ 
          id:'chartDiv',
          data:EntryFactory.chartData,
          height:400,
          width:600
        });

    }
    initialize();


  
  });