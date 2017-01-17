var http = require('http');
var getPort = require('./lib/getPort');
var runWebServer = require('./lib/runWebServer');
var paths = require('../config/paths');
var app = require(paths.serverIndexJs);

var port = getPort();
var server = http.createServer(app);

runWebServer(server, port);
