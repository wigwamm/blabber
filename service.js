var connect = require('connect');
var rest = require('connect-rest');
var http = require('http');
var app = connect();

app.use(connect.bodyParser());
app.use(rest.rester());

var descriptionGenerator = require('./lib/descriptionGenerator');
rest.post('/description/:type', descriptionGenerator.generate);

http.createServer(app).listen(80);
