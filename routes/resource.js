var express = require('express');
var router = express.Router();

var Scoop = require('../models/scoop');

// Require controller modules.
var api_controller = require('../controllers/api');
var scoop_controller = require('../controllers/scoop');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// SCOOP ROUTES ///
// POST request for creating a Scoop. 
router.post('/scoops', scoop_controller.scoop_create_post);
// DELETE request to delete Scoop.
router.delete('/scoops/:id', scoop_controller.scoop_delete);
// PUT request to update Scoop.
router.put('/scoops/:id', scoop_controller.scoop_update_put);
// GET request for one Scoop.
router.get('/scoops/:id', scoop_controller.scoop_detail);
// GET request for list of all Scoop items.
router.get('/scoops', scoop_controller.scoop_list);
module.exports = router;