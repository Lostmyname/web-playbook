var express = require('express');
var root = require('./root');

var routes = module.exports = express.Router();

routes.use('/', root);
