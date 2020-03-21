var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var userRouter = require("./routes/user.router")
var adminRouter = require('./routes/admin.index');
var mongoose = require('mongoose');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


mongoose.connect(require("./configs").database_connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Database connected")).catch(e => console.log("Database error", e))

app.use('/public', express.static('public'));


app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/admins', adminRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
