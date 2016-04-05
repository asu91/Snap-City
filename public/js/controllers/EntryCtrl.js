angular.module('mvp.entryCtrl',[])
  .controller('EntryController', function($scope, EntryFactory){
    $scope.tagline = 'HI THERE';
    $scope.number = {};
    $scope.display = [];
    $scope.total = 0;
    $scope.incrementNumber = function(){
      $scope.display.push($scope.number.squat * $scope.number.reps || 1);
      $scope.total += $scope.number.squat * ($scope.number.reps || 1)
    }
    $scope.pushVol = function(){
      var entry = {squat: $scope.total}
      EntryFactory.create(JSON.stringify(entry));
    }
    $scope.remove = function(index){
      $scope.display.splice(index, 1);
      calculate();
    }

    var calculate = function(){
      if($scope.display.length === 0){
        $scope.total = 0;
      } else {
        var sum = 0;
        for(var i = 0; i < $scope.display.length; i++){
          sum += $scope.display[i];
        }
        $scope.total = sum;
      }
    }
  });