var express = require('express');
const scoop_controlers= require('../controllers/scoop');
var router = express.Router();
/* GET costumes */
router.get('/', scoop_controlers.scoop_view_all_Page );
module.exports = router;