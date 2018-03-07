var express = require('express');
var ejs = require('ejs'); 
var app = express();

app.get('/', function (req, res) {
  res.render('index');
});
app.engine('html', ejs.__express);
app.set('view engine', 'html')
app.use('/static', express.static('public'))
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});