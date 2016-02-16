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
      console.log(entryData, '<---entryData')
      return $http.post('/api/entry', entryData)
        .then(function(){
          console.log('SUCCESS!!')
        })
    };

    var erase = function(id){
      return $http.delete('/api/entry', id);
    };

    var getQuote = function(){
      console.log('helloooooo')
      return $http({
        method: 'GET',
        url: 'http://api.forismatic.com/api/1.0/'
        }).then(function(res){
          console.log("we came backkk", res);
          res.status = 200;
          return res;
        })
    };

    // var chartData={
    //   "type":"area",  // Specify your chart type here.
    //   "series":[  // Insert your series data here.
    //       { "values": [35, 42, 67, 89]},
    //       { "values": [28, 40, 39, 36]}
    //   ]
    // };

    return {
      get: get,
      create: create,
      erase: erase,
      getQuote: getQuote
    };
    
  });