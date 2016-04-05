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
      return $http.get('/api/entry', function(req, res){
        if(err){
          console.error(err);
        } else {
          res.json(req.body);
        }
      });
    };

    var create = function(entryData){
      console.log(entryData, '<---entryData')
      return $http.post('/api/entry', entryData)
        .then(function(){
          console.log('SUCCESS!!')
        })
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

    var getQuote = function(){
      return $http({
        method: 'GET',
        url: 'http://api.forismatic.com/api/1.0/'
        }).then(function(res){
          res.status = 200;
          return res;
        })
    };


    return {
      get: get,
      post: post,
      create: create,
      erase: erase,
      getQuote: getQuote
    };
    
  });