var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('scoop', { title: 'Search Results of scoop' });
});

module.exports = router;