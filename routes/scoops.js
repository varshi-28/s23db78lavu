var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('scoops', { title: 'Search Results of scoops' });
});

module.exports = router;