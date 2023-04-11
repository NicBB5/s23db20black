var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = 
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {useNewUrlParser: true,
useUnifiedTopology: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
  console.log("Connection to DB succeded")});
  

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var JerseyRouter = require('./routes/Jersey')
var boardRouter = require('./routes/board')
var selectorRouter = require('./routes/selector')
var Jersey = require("./models/Jersey");
var resourceRouter = require("./controllers/Jersey")

async function recreateDB(){
  await Jersey.deleteMany();

  let instance1 = new
  Jersey({Jersey_type: "Liverpool", size: 'large', Jersey_number: 10});
  instance1.save()
    .then(function(err,doc){
    if(err) return console.error(err);
    console.log("First object saved")
  });

  let instance2 = new
  Jersey({Jersey_type:"Kansas City Chiefs", size: 'large', Jersey_number: 15});
  instance2.save()
    .then(function(err,doc){
    if(err) return console.error(err);
    console.log("Second object saved")
  });

  let instance3 = new
  Jersey({Jersey_type:"Memphis Grizzles", size:'large', Jersey_number: 12});
  instance3.save()
    .then(function(err,doc){
    if(err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) {recreateDB();}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Jersey', JerseyRouter)
app.use('/board', boardRouter)
app.use('/selector', selectorRouter)
app.use('./resource', resourceRouter)

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

module.exports = app;
