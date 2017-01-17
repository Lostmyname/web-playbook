require('dotenv').config({ silent: true });
var argv = require('yargs').argv;

exports.getHost =  function () {
  return process.env.HOST || 'https://www.lostmy.name';
}

exports.getPort = function () {
  return argv.port || process.env.PORT || 3050;
}

exports.isDev = function () {
  return process.env.NODE_ENV !== 'production';
}
