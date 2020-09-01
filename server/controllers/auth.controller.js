const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const ApiResponse = require('../utils/ApiResponse');

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

module.exports.loginSuccess = async (req, res, next) => {
  try {
    if (req.user) {
      const data = await User.findAndGenerateToken(req.user);
      return ApiResponse.ok(req, res, data);
    }
    throw new Error('Login Failed');
  } catch (error) {
    return ApiResponse.serverError(req, res, error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  try {
    const data = await User.find();
    return ApiResponse.ok(req, res, data);
  } catch (error) {
    return ApiResponse.serverError(req, res, error);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    // console.log(req.body, 'req.data');
    const checkDuplicateEmail = await User.findOne({ email: req.body.email });
    if (checkDuplicateEmail) {
      throw new Error('Email is already registered');
    }

    req.body.password = await hashPassword(req.body.password);
    const newUser = await new User(req.body).save();
    ApiResponse.ok(req, res, newUser.transform());
  } catch (error) {
    console.log(error, 'error');
    return ApiResponse.serverError(req, res, error);
  }
};
