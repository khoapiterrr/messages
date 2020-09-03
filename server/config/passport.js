const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');

const { google, facebook, github } = require('./config');

const callBackPassport = async (accessToken, refreshToken, profile, done) => {
  console.log(profile);
};

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  console.log('passport.serializeUser');
  done(null, user);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((user, done) => {
  console.log('passport.deserializeUser');
  done(null, user);
  // User.findById(id)
  //   .then((user) => {
  //     done(null, user);
  //   })
  //   .catch((e) => {
  //     done(new Error('Failed to deserialize an user'));
  //   });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        // Find the user given the email
        const user = await User.findOne({ email: email });

        // If not, handle it
        if (!user) {
          return done(null, false);
        }

        // Check if the password is correct
        const isMatch = await user.passwordMatches(password);

        // If not, handle it
        if (!isMatch) {
          return done(null, false);
        }

        // Otherwise, return the user
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    },
  ),
);

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: google.id,
      clientSecret: google.secret,
      callbackURL: '/api/auth/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile, 'profile');

      // find current user in UserModel
      const currentUser = await User.findOne({
        googleId: profile._json.sub,
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          firstName: profile._json.given_name,
          lastName: profile._json.family_name,
          googleId: profile._json.sub,
          avatar: profile._json.picture,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    },
  ),
);
passport.use(
  new FacebookStrategy(
    {
      // options for facebook strategy
      clientID: facebook.id,
      clientSecret: facebook.secret,
      callbackURL: '/api/auth/facebook/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile, 'profile');

      // find current user in UserModel
      const currentUser = await User.findOne({
        googleId: profile._json.sub,
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          firstName: profile._json.given_name,
          lastName: profile._json.family_name,
          facebookId: profile._json.id,
          avatar: profile._json.picture,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    },
  ),
);

passport.use(
  new GitHubStrategy(
    {
      // options for github strategy
      clientID: github.id,
      clientSecret: github.secret,
      callbackURL: '/api/auth/github/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile, 'profile');

      // find current user in UserModel
      const currentUser = await User.findOne({
        githubId: profile._json.node_id,
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          lastName: profile._json.name,
          githubId: profile._json.node_id,
          avatar: profile._json.avatar_url,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    },
  ),
);
