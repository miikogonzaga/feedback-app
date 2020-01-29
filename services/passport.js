const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// Create cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
})

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    // Search for ID
    const existingUser = await User.findOne({ googleID: profile.id })

      // Check for existing user
      if (existingUser) {
        return done(null, existingUser);
      }

      // Create model instance in db
      const user = await new User({
        googleID: profile.id,
        displayName: profile.displayName
      }).save()
      done(null, user)
  })
);
