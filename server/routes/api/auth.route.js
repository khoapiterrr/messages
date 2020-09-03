/**
 * @swagger
 * tags:
 *   name: Authorization
 *   description: Auth management
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { validate } = require('express-validation');
const controller = require('../../controllers/auth.controller');
const { register } = require('../../validations/user.validation');
const CLIENT_HOME_PAGE_URL = 'http://localhost:8888/auth/login/success';

router.get('/status', (req, res) => res.send('oke'));

/**
 * @swagger
 * path:
 *  /auth/login/success/:
 *    get:
 *      summary: Check login with OAuth passport
 *      tags: [Authorization]
 *      responses:
 *        "200":
 *          description: Login success
 */
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

/**
 * @swagger
 * path:
 *  /auth/signin/:
 *    post:
 *      summary: Login with OAuth local passport
 *      tags: [Authorization]
 *      requestBody:
 *        description: Optional description in *Markdown*
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *              required:
 *                - email
 *                - password
 *      responses:
 *        "200":
 *          description: Login success
 */
router
  .route('/signin')
  // auth with local
  .post(
    passport.authenticate('local', {
      successRedirect: CLIENT_HOME_PAGE_URL,
      failureRedirect: '/auth/login/failed',
    }),
  );

/**
 * @swagger
 * path:
 *  /auth/register/:
 *    post:
 *      summary: Create a new user
 *      tags: [Authorization]
 *      requestBody:
 *        description: Optional description in *Markdown*
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                firstname:
 *                  type: string
 *                lastname:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                birthday:
 *                  type: date
 *                gender:
 *                  type: integer
 *              required:
 *                - firstname
 *                - lastname
 *                - email
 *                - password
 *                - birthday
 *                - gender
 *      responses:
 *        "200":
 *          description: Create a new user
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
router.route('/register').post(validate(register), controller.register);

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
