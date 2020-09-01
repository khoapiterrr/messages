const express = require('express');
const router = express.Router();
const passport = require('passport');
const { validate } = require('express-validation');
const controller = require('../controllers/auth.controller');
const { register } = require('../validations/user.validation');
const CLIENT_HOME_PAGE_URL = 'http://localhost:8888/auth/login/success';

// when login is successful, retrieve user info
router.get('/login/success', controller.loginSuccess);

// when login failed, send failed msg
router.get('/login/failed', (req, res) => {
  console.log(req.user, 'req.user');
  res.status(401).json({
    success: false,
    message: 'user failed to authenticate.',
  });
});

// When logout, redirect to client
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

router
  .route('/signin')
  // auth with local
  .post(
    passport.authenticate('local', {
      successRedirect: CLIENT_HOME_PAGE_URL,
      failureRedirect: '/auth/login/failed',
    }),
  );

router
  .route('/register')
  // Create a new account
  .post(validate(register), controller.register);

// auth with google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  }),
);

// redirect to home page after successfully login via google
router.get(
  '/google/redirect',
  passport.authenticate('google', {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: '/auth/login/failed',
  }),
);

// auth with facebook
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['public_profile', 'email'],
  }),
);

// redirect to home page after successfully login via facebook
router.get(
  '/facebook/redirect',
  passport.authenticate('facebook', {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: '/auth/login/failed',
  }),
);

// auth with github
router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['user:email'],
  }),
);

// redirect to home page after successfully login via github
router.get(
  '/github/redirect',
  passport.authenticate('github', {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: '/auth/login/failed',
  }),
);

module.exports = router;
