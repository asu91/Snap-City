angular.module('mvp.factory', [])
  .factory('EntryFactory', function($http){

    var get = function(){
      return $http.get('/api/entry');
    };

    var create = function(entryData){
      return $http.post('/api/entry', entryData);
    };

    var erase = function(id){
      return $http.delete('/api/entry', id);
    };

    return {
      get: get,
      create: create,
      erase: erase
    };
    
  });