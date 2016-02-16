angular.module('mvp.mainCtrl', [])
  .controller('MainController', function($scope, EntryFactory){
    $scope.quote = '';
    var initialize = function(){
      $scope.quote = EntryFactory.getQuote();
    };
    // initialize();
  });