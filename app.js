var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Scoop = require("./models/scoop");

require('dotenv').config();

const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var scoopRouter = require('./routes/scoops');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/scoops', scoopRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await Scoop.deleteMany();
 let instance1 = new Scoop({scoopFlavor: 'Vanilla', scoopSize: 'Small', scoopColor: 'White', scoopPrice: 2.50 });
//  let instance2 = new Scoop({ scoopFlavor: 'Vanilla', scoopSize: 'Small', scoopColor: 'White', scoopPrice: 2.50 });
 let instance3 = new Scoop({scoopFlavor: 'Chocolate', scoopSize: 'Medium', scoopColor: 'Brown', scoopPrice: 3.00});
 let instance4 = new Scoop({scoopFlavor: 'Strawberry', scoopSize: 'Large', scoopColor: 'Pink', scoopPrice: 3.50});
 instance1.save().then(doc=>{
 console.log("First object saved")}
 ).catch(err=>{
 console.error(err)
 });
//  instance2.save().then(doc=>{
//   console.log("Second object saved")}
//   ).catch(err=>{
//   console.error(err)
//   });
  instance3.save().then(doc=>{
    console.log("Third object saved")}
    ).catch(err=>{
    console.error(err)
    });
    instance4.save().then(doc=>{
      console.log("Fourth object saved")}
      ).catch(err=>{
      console.error(err)
      });
}
let reseed = true;
if (reseed) {recreateDB();}
module.exports = app;
