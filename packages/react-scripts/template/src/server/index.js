require('isomorphic-fetch');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
import react from './middleware/react';
var initNunjucks = require('./system/nunjucks');
var viewFolder = path.join(__dirname, 'views');
var publicFolder = path.join(__dirname, 'public');

var app = module.exports = express();

app.set('view engine', 'html');

initNunjucks({ app, viewFolder });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicFolder));

app.get('*', react);

// Static files will almost certainly be served behind a CDN e.g. fastly
// in which case this will only serve to handle requests to warm up the cache.
// If the CDN routes requests to a static server (assuming assets are uploaded
// there when the app gets deployed) requests will never reach this server.
app.use(express.static('build'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
