var connect = require('connect');
var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();
app.use(connect.bodyParser());

// A basic index page
var html = fs.readFileSync('./views/index.html','utf8');
var descriptionGenerator = require('./lib/descriptionGenerator');

app.get('/', function(req, res){
  res.send(html);
});
app.post('/description/:type', function(req, res){
  res.json(descriptionGenerator.generate(req));
});

http.createServer(app).listen(80);
