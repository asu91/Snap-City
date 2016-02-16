angular.module('mvp.factory', [])
  .factory('EntryFactory', function($http){

    var get = function(){
      return $http.get('/api/entry', function(req, res){
        if(err){
          console.error(err);
        } else {
          res.json(req.body);
        }
      });
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