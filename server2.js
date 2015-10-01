var express = require('express')
  , app = express();


// CORS request will not work
app.get('/items', function(req, res, next){
  res.status(200).json({message: "Items information"});
});

// working CORS request - will work from any origin
app.get('/', function (req,res) {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({message: 'Hello World!'});
});

// JSONP request
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
