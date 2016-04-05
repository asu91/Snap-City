angular.module('mvp.onerep', [])
  
  .controller('OneRep', function($scope, OneRepFactory){

    $scope.findOneRep = function(){
      $scope.onerepmax = Math.floor(OneRepFactory.calculate($scope.number.weight, $scope.number.rep));
    };

    $scope.onerepmax = 0;

  });