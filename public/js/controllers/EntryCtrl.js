angular.module('mvp.entryCtrl',[])
  .controller('EntryController', function($scope, EntryFactory){
    $scope.tagline = 'HI THERE';
    $scope.number = {};
    $scope.postNumber = function(){
      // EntryFactory.create($scope.number);
      console.log('triggers')
    }
  });