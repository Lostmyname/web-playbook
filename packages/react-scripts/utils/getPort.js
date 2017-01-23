var argv = require('yargs').argv;

module.exports = function getPort() {
  return normalisePort(argv.port || process.env.PORT || 3000)
}

function normalisePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
