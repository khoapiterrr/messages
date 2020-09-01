const mongoose = require('mongoose');
const { env, jwtExpirationInterval, jwtSecret } = require('../config/config');
const moment = require('moment-timezone');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
/**
 * User Roles
 */
const roles = ['user', 'admin'];
const userSchema = new mongoose.Schema(
  {
    email: {
      type: 'string',
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter a valid email',
      ],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      minlength: 6,
      maxlength: 128,
    },
    firstname: {
      type: String,
      maxlength: 20,
      minlength: 2,
      trim: true,
    },
    lastname: {
      type: String,
      maxlength: 20,
      minlength: 2,
      trim: true,
    },
    facebookId: String,
    googleId: String,
    githubId: String,
    role: {
      type: String,
      enum: roles,
      default: 'user',
    },
    avatar: String,
    token: String,
    gender: Number,
  },
  {
    timestamps: true,
  },
);
/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
// userSchema.pre('save', async function save(next) {
//   try {
//     if (!this.isModified('password')) return next();

//     const rounds = env === 'test' ? 1 : 12;

//     const hashpwd = await bcrypt.hash(this.password, rounds);

//     this.password = hashpwd;
//     return next();
//   } catch (error) {
//     next(error);
//   }
// });

/**
 * Methods
 */
userSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      'id',
      'firstname',
      'lastname',
      'avatar',
      'createdAt',
      'email',
    ];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },

  generateToken() {
    const playload = {
      id: this._id,
      email: this.email,
      name: `${this.firstname} ${this.lastname}`,
    };
    // const playload = this._id;
    return jwt.sign(playload, jwtSecret, {
      expiresIn: jwtExpirationInterval,
    });
  },

  async passwordMatches(password) {
    return bcrypt.compare(password, this.password);
  },
});

/**
 * Statics
 */
userSchema.statics = {
  roles,

  /**
   * Get user
   *
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, Error>}
   */
  async get(id) {
    try {
      let user;

      if (mongoose.Types.ObjectId.isValid(id)) {
        user = await this.findById(id).exec();
      }
      if (user) {
        return user;
      }

      throw new Error('User does not exist');
    } catch (error) {
      throw error;
    }
  },
  /**
   * Find user by id and tries to generate a JWT token
   *
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  async findAndGenerateToken(options) {
    const { _id } = options;

    const user = await this.get(_id);

    const payload = {
      id: _id,
    };
    //generate token
    user.token = jwt.sign(payload, jwtSecret, {
      expiresIn: jwtExpirationInterval,
    });
    return await user.save();
  },
};

module.exports = User = mongoose.model('user', userSchema);
