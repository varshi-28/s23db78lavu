var Scoop = require('../models/scoop');
// List of all Scoops
exports.scoop_list = function(req, res) {
 res.send('NOT IMPLEMENTED: scoop list');
};
// for a specific scoop.
exports.scoop_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Scoop detail: ' + req.params.id);
};
// Handle Scoop create on POST.
exports.scoop_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Scoop create POST');
};
// Handle scoop delete form on DELETE.
exports.scoop_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: scoop delete DELETE ' + req.params.id);
};
// Handle Scoop update form on PUT.
exports.scoop_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Scoop update PUT' + req.params.id);
};