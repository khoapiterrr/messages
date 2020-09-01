const ApiResponse = require('../utils/ApiResponse');
const { validate, ValidationError, Joi } = require('express-validation');
/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
exports.validationError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return ApiResponse.serverError(req, res, err);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
exports.notFound = (req, res, next) => {
  return ApiResponse.notFound(req, res);
};
