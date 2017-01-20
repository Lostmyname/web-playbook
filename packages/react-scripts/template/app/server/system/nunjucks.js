var nunjucks = require('nunjucks');
var { getAssetPath } = require('../lib/assets');
var { isDev } = require('./index');

module.exports = function initNunjucks({ app, viewFolder }) {
  nunjucks
    .configure(viewFolder, {
      express: app,
      autoescape: true
    })
    .addGlobal('env', process.env)
    .addGlobal('dev', isDev())
    .addFilter('asset', getAssetPath)
    .addFilter('json', function (data, indentation = false) {
      return JSON.stringify(data, 0, indentation ? 2 : 0);
    });
};
