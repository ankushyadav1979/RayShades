var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/glasses');
;
var app = express();

console.log('controll here 1');

// view engine setup
//app.use('/', indexRouter);
app.use('/glasses', usersRouter);
// app.use(app.router);
// routes.initialize(app);

console.log('controll here 1');


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
console.log('controll here 1');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images',express.static('images'));
app.use('/css',express.static('css'));
console.log('controll here 1');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('in appj.s line 31');
  next(createError(404));
});

console.log('controll here 5');

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log('in appj.s line 38',err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log('controll here 6');
//app.set("port",9876);
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})

module.exports = app;
