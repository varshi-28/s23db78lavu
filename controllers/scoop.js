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
    res.render('scoops', { title: 'Scoop Search Results', results: theScoops });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   

// for a specific scoop.
exports.scoop_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Scoop.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.scoop_delete =  async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await Scoop.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
};  

// Handle Scoop update form on PUT.
exports.scoop_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
      let toUpdate = await Scoop.findById(req.params.id);
  
      // Do updates of properties
      if (req.body.scoopFlavor) toUpdate.scoopFlavor = req.body.scoopFlavor;
      if (req.body.scoopSize) toUpdate.scoopSize = req.body.scoopSize;
      if (req.body.scoopColor) toUpdate.scoopColor = req.body.scoopColor;
      if (req.body.scoopPrice) toUpdate.scoopPrice = req.body.scoopPrice;
  
      let result = await toUpdate.save();
      console.log("Success " + result);
      res.send(result);
    } catch (err) {
      res.status(500).send(`{"error": "${err}": Update for id ${req.params.id} failed`);
    }
  };

  // Handle a show one view with id specified by query
  exports.scoop_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Scoop.findById( req.query.id)
    res.render('scoopdetail', 
  { title: 'Scoop Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
  };

  // Handle building the view for creating a costume.
  // No body, no in path parameter, no query.
  // Does not need to be async
  exports.scoop_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('scoopcreate', { title: 'scoop Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
  };
  exports.scoop_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Scoop.findById(req.query.id)
    res.render('scoopupdate', { title: 'Scoop Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }

   exports.scoop_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Scoop.findById(req.query.id)
    res.render('scoopdelete', { title: 'Scoop Delete', toShow: 
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }