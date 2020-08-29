const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user.model');
const { google } = require('./config');
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
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: google.id,
      clientSecret: google.secret,
      callbackURL: '/auth/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      // passport callback function
      // console.log('passport callback function fired:');
      // console.log(profile, 'profile');

      // find current user in UserModel
      // const currentUser = await User.findOne({
      //   twitterId: profile._json.id_str,
      // });
      // console.log(currentUser);
      // console.log(profile.displayName + '- ' + profile.id);
      const user = profile.displayName + ' - ' + profile.id;
      done(null, user);
      // // create new user if the database doesn't have this user
      // if (!currentUser) {
      //   const newUser = await new User({
      //     name: profile._json.name,
      //     screenName: profile._json.screen_name,
      //     twitterId: profile._json.id_str,
      //     profileImageUrl: profile._json.profile_image_url,
      //   }).save();
      //   if (newUser) {
      //     done(null, newUser);
      //   }
      // }
      // done(null, currentUser);
    },
  ),
);
