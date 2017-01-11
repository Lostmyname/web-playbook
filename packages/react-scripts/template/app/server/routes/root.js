var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.render('default', { title: 'title', body: 'Page content' })
})

module.exports = router
