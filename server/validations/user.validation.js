const { validate, ValidationError, Joi } = require('express-validation');
module.exports.register = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(128),
    firstname: Joi.string().required().min(2).max(20),
    lastname: Joi.string().required().min(2).max(20),
    birthday: Joi.date(),
    /**
     * 0- custom
     * 1- male
     * 2- female
     */ password:
      '$2a$12$koVfQSJXBwSxhsWQsNd.T.MjdD5KaKFJUmp/5dfZMej2mdldZSaNi',

    gender: Joi.number().min(0).max(3).integer(),
  }),
};
