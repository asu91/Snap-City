var Entry = require('./models/entry');
var Q = require('q');
var http = require('http');

var createEntry = Q.nbind(Entry.create, Entry);
var findAllEntries = Q.nbind(Entry.find, Entry);

module.exports = function(app) {

  app.get('/api/entry', function(req, res, next) {

    findAllEntries({})
      .then(function(entries){
        res.json(entries);
      })
      .fail(function(error){
        next(error);
      });
  });

  app.post('/api/entry', function(req, res, next) {
    console.log(req.body, 'this is the body')
    createEntry(req.body)
      .then(function(){
        console.log('SUCCESSFUL CREATION')
        res.send();
      })

  })




  app.get('*', function(req, res){
    res.sendfile('./public/index.html');
  });
};