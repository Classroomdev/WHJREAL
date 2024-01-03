const passport = require('passport');
const User = require('../models/user-model');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/callback',
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleid: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log('The User is already in the database');
        } else {
          new User({
            username: profile.displayName,
            email: profile.emails[0].value,
            googleid: profile.id,
            photo: profile.photos[0].value,
          })
            .save()
            .then((newUser) => {
              console.log('A New user has been added');
            });
        }
      });
    }
  )
);
