const Joi = require('joi');
module.exports.register = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(128),
    firstname: Joi.string().required().min(2).max(20),
    lastname: Joi.string().required().min(2).max(20),
  },
};
