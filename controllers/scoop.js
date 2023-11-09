var Scoop = require('../models/scoop');
// List of all Scoops
exports.scoop_list = async function(req, res) {
    try{
    theScoops = await Scoop.find();
    res.send(theScoops);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

   // VIEWS
// Handle a show all view
exports.scoop_view_all_Page = async function(req, res) {
    try{
    theScoops = await Scoop.find();
    res.render('scoopS', { title: 'Scoop Search Results', results: theScoops });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   

// for a specific scoop.
exports.scoop_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Scoop detail: ' + req.params.id);
};

// Handle Scoop create on POST.
exports.scoop_create_post =async function(req, res) {
    console.log(req.body)
    let document = new Scoop();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.scoopFlavor = req.body.scoopFlavor;
    document.scoopSize = req.body.scoopSize;
    document.scoopColor = req.body.scoopColor;
    document.scoopPrice = req.body.scoopPrice;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
// Handle scoop delete form on DELETE.
exports.scoop_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: scoop delete DELETE ' + req.params.id);
};

// Handle Scoop update form on PUT.
exports.scoop_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Scoop update PUT' + req.params.id);
};

