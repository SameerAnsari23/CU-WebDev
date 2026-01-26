const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv')
dotenv.config();

/* -------------------------- Google OAuth Strategy -------------------------- */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        // Check if user already exists
        const user = await User.findOne({ googleId: profile.id });

        if (user) {
          return done(null, user);
        }

        // Create a new user if not found
        const newUser = await User.create({
          googleId: profile.id,
          username: profile.displayName,
          googleAccessToken: accessToken,
          googleImg: profile.picture,
        });

        return done(null, newUser);
      } catch (err) {
        done(err);
      }
    }
  )
);

/* ----------------------------- Local Strategy ------------------------------ */
passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await User.findOne({ username: username });
      if (!user) return done(null, false);

      // Compare password with bcrypt
      bcrypt.compare(password, user.password, function (err, result) {
        if (!result) return done(null, false);
        return done(null, user);
      });
    } catch (err) {
      done(err);
    }
  })
);

/* --------------------------- Passport Serialization ------------------------ */
passport.serializeUser(function (user, done) {
  done(null, user._id);
});

/* -------------------------- Passport Deserialization ----------------------- */
passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findOne({ _id: id });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;