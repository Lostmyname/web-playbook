var chalk = require('chalk');
var http = require('http');
var getPort = require('../utils/getPort');
var runWebServer = require('../utils/runWebServer');
var paths = require('../config/paths');

if (process.env.NODE_ENV !== 'production') {
  console.log(chalk.yellow('This script is not intended for development environments. Setting NODE_ENV=production...'));
  process.env.NODE_ENV = 'production';
}

var app = require(paths.serverIndexJs);

var port = getPort();
var server = http.createServer(app);

runWebServer(server, port);
