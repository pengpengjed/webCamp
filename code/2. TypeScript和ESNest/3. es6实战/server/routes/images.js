var express = require('express');
var router = express.Router();

router.post('/upload', function(req, res, next) {
  res.render('respond with a resource')
});

module.exports = router;
