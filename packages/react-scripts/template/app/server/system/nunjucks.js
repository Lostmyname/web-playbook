var nunjucks = require('nunjucks')

module.exports = function ({ app, viewFolder }) {
  nunjucks
  .configure(viewFolder, {
    express: app,
    autoescape: true
  })
  .addGlobal('env', process.env)
  .addFilter('json', function (data, indentation = false) {
    return JSON.stringify(data, 0, indentation ? 2 : 0);
  })
}
