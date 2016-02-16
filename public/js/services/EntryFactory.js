angular.module('mvp.factory', [])
  .factory('EntryFactory', function($http){

    var get = function(){
      return $http({
        method: 'GET',
        url: '/api/entry'
      })
      .then(function(resp){
        return resp.data;
      });
    };

    var post = function(entryData){
      return $http({
        method: 'POST',
        url: '/api/entry',
        data: entryData
      })
      .then(function(){
        console.log('POST SUCCESSFUL');
      });
    };

    var erase = function(id){
      return $http({
        method: 'DELETE',
        url: 'api/entry',
        data: id
      })
      .then(function(){
        console.log('DELETED');
      });
    };

    return {
      get: get,
      post: post,
      erase: erase
    };
    
  });