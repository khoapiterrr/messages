/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */
const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');
const ApiResponse = require('../../utils/ApiResponse');
/**
 * @swagger
 * path:
 *  /user/:
 *    get:
 *      summary: Create a new user
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
router.get('/', async (req, res, next) => {
  try {
    const data = await User.find();
    ApiResponse.ok(req, res, data);
  } catch (err) {
    ApiResponse.serverError(req, res, err);
  }
});

router.get('/get', (req, res) => {
  res.status(200).json('xin chao');
});

module.exports = router;
