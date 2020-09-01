const User = require('../models/user.model');
const ApiResponse = require('../utils/ApiResponse');

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
    console.log(req.data, 'req.data');
  } catch (error) {
    return ApiResponse.serverError(req, res, error);
  }
};
