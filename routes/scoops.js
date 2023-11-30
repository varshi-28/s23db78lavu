var express = require('express');
const scoop_controlers= require('../controllers/scoop');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
/* GET costumes */
router.get('/', scoop_controlers.scoop_view_all_Page );
/* GET detail costume page */
router.get('/detail',secured, scoop_controlers.scoop_view_one_Page );
/* GET create costume page */
router.get('/create',secured, scoop_controlers.scoop_create_Page);
router.get('/update',secured, scoop_controlers.scoop_update_Page);
router.get('/delete',secured, scoop_controlers.scoop_delete_Page);
module.exports = router;