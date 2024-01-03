const path = require('path');

const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const passportSetup = require('./services/passport-setup');

const app = express();

app.use(helmet());

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_KEY],
  })
);
// app.use('/v1', api);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public'));
});
// app.get('/', (req, res) => {
//   res.send('This is the home page');
// });

module.exports = app;
