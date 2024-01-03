const passport = require('passport');
const User = require('../models/users/users.mongo');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

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
          done(null, currentUser);
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
              done(null, newUser);
            });
        }
      });
    }
  )
);
