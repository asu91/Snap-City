angular.module('mvp.statsCtrl',[])
  .controller('StatsController', function($scope, EntryFactory){
    $scope.tagline = 'HI THERE';
    $scope.numbers = {};
    var stats = [];
    var chartData={
      "title":{
        "text": "SKWAATS",
        "width":150,
        "height":30,
        "offset-x": 400,
        "offset-y":10,
        "background-color":"gray",
        "color":"#FFF",
        "border-radius":"4px",
        "font-weight":"none"
      },
      "type":"area",  // Specify your chart type here.
      "scale-x":{
         "label":{
            "text":"Visits"
        }
      },
      "series":[{ "values": stats}]
    };
    var initialize = function(){
      EntryFactory.get()
        .then(function(resp){
          for(var i = 0; i < resp.data.length; i++){
            stats.push(resp.data[i].squat);
          }
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