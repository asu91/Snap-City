angular.module('mvp.onerepfac', [])
  .factory('OneRepFactory', function($http){

    var calculate = function(weight, reps){
      if(reps === 1){
        return weight;
      }
      if(reps === 2){
        return weight * 1.03;
      }
      if(reps === 3){
        return weight * 1.06;
      }
      if(reps === 4){
        return weight * 1.09;
      }
      if(reps === 5){
        return weight * 1.13;
      }
      if(reps === 6){
        return weight * 1.16;
      }
      if(reps === 7){
        return weight * 1.20;
      }
      if(reps === 8){
        return weight * 1.24;
      }
      if(reps === 9){
        return weight * 1.29;
      }
      if(reps === 10){
        return weight * 1.33;
      }

    };

    return {
      calculate: calculate
    };
    
  });