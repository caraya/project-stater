// Require Node built-in packages
const path = require('node:path');
// Express-related packages
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
// Nunjucks
const nunjucks = require('nunjucks');
// Passport-related
const passport = require('passport');

// Initialize the sessioon store
const SQLiteStore = require('connect-sqlite3')(session);

// ROUTE DEFINITIONS
// indexRouter and authRouter are required
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
// 
const usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog');

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.set('view engine', 'html')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));

app.use('/', indexRouter);
app.use('/', authRouter);

app.use('/users', usersRouter);
app.use('/blog', blogRouter )

module.exports = app;
