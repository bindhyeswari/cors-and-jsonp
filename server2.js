var express = require('express')
  , app = express();
 
 
app.get('/items', function(req, res, next){
  res.status(200).json({message: "Items information"});
});

app.get('/info', function (req, res) {
  console.log(req.query);
  var data = {
    name: 'Alok'
  };
  res.send('console.log("Hello World!");' + req.query.callback + '(' + JSON.stringify(data) + ');');
});
 
app.listen(3001, function(){
  console.log('CORS-enabled web server listening on port 3001');
});
