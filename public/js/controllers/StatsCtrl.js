angular.module('mvp.statsCtrl',[])
  .controller('StatsController', function($scope, EntryFactory){
    $scope.tagline = 'HI THERE';
    $scope.numbers = {};
    var stats = [];
    var chartData={
      "type":"area",  // Specify your chart type here.
      "series":[{ "values": stats}]
    };
    var initialize = function(){
      EntryFactory.get()
        .then(function(resp){
          console.log(resp.data, '<-----respdata');
          for(var i = 0; i < resp.data.length; i++){
            stats.push(resp.data[i].squat);
          }
          // $scope.numbers = resp.data
        })
        .then(function(){

          zingchart.render({ 
            id:'chartDiv',
            data:chartData,
            height:400,
            width:600
          });
          
        })
        .catch(function(err){
          console.error(err);
        })


    }
    initialize();


  
  });