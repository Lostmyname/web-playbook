var express = require('express')
var root = require('./root')
var orgs = require('./orgs')

var routes = express.Router()

routes.use('/', root)
routes.use('/orgs', orgs)

module.exports = routes
