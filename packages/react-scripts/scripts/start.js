process.env.NODE_ENV = 'development';
require('dotenv').config({silent: true});

var fs = require('fs');
var http = require('http');
var chalk = require('chalk');
var detect = require('detect-port');
var checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
var clearConsole = require('react-dev-utils/clearConsole');
var getProcessForPort = require('react-dev-utils/getProcessForPort');
var prompt = require('react-dev-utils/prompt');
var createWebpackCompiler = require('./lib/createWebpackCompiler');
var createWebpackDevServer = require('./lib/createWebpackDevServer');
var runWebServer = require('./lib/runWebServer');
var runWebpackDevServer = require('./lib/runWebpackDevServer');
var getPort = require('./lib/getPort');
var paths = require('../config/paths');
var app = require(paths.serverIndexJs);

var useYarn = fs.existsSync(paths.yarnLockFile);
var cli = useYarn ? 'yarn' : 'npm';
var isInteractive = process.stdout.isTTY;

var port = getPort();

if (!checkRequiredFiles([paths.appIndexJs])) {
  process.exit(1);
}

function run(port) {
  if (isInteractive) {
    clearConsole();
  }

  var devPort = port + 1;
  var protocol = process.env.HTTPS === 'true' ? "https" : "http";
  var host = process.env.HOST || 'localhost';
  var proxyTarget = `${protocol}://${host}:${port}`;

  console.log(chalk.cyan('Starting the asset compiler...'));
  var compiler = createWebpackCompiler();
  var assetServer = createWebpackDevServer(compiler, protocol, host, proxyTarget);
  var webServer = http.createServer(app);

  console.log(chalk.cyan('Starting the asset server...'));
  runWebpackDevServer(assetServer, devPort);

  console.log(chalk.cyan('Starting the web server...'));
  runWebServer(webServer, port);

  console.log();
  console.log('Note that the development build is not optimized.');
  console.log('To create a production build, use ' + chalk.cyan(cli + ' run build') + '.');
  console.log();
}

detect(port).then(availablePort => {
  if (availablePort === port) {
    run(availablePort);
    return;
  }

  if (isInteractive) {
    clearConsole();
    var existingProcess = getProcessForPort(port);
    var question =
      chalk.yellow('Something is already running on port ' + port + '.' +
        ((existingProcess) ? ' Probably:\n  ' + existingProcess : '')) +
        '\n\nWould you like to run the app on another port instead?';

    prompt(question, true).then(shouldChangePort => {
      if (shouldChangePort) {
        run(availablePort);
      }
    });
  } else {
    console.log(chalk.red('Something is already running on port ' + port + '.'));
  }
});
