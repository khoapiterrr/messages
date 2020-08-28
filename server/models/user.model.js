const mongoose = require('mongoose');

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
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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
    QRCode: String,
    role: {
      type: String,
      enum: roles,
      default: 'user',
    },
    avatar: String,
    token: {
      id: String,
      expire: Date,
    },
    gender: Number,
  },
  {
    timestamps: true,
  },
);

module.exports = User = mongoose.model('user', userSchema);
