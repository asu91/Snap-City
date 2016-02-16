var Entry = require('./models/entry');

module.exports = function(app) {

  app.get('/api/entry', function(req, res) {

    Entry.find(function(err, entry) {
      if (err){
        res.send(err);
      } else {
        res.json(entry);
      }
    });
  });

  app.post('api/entry', function(req, res) {
    console.log(req.body, 'this is the body')
    
  })


  app.get('*', function(req, res){
    res.sendfile('./public/index.html');
  });
};