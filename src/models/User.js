/**
 * @module model/user
 */

const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");
const { ObjectId } = mongoose.Schema;

/**
 * User schema
 */
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minlength: 2,
      maxlength: 32,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      minlength: 2,
      maxlength: 32,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    encry_password: {
      type: String,
      require: true,
    },
    profImg: {
      type: String,
    },
    contact: {
      type: String,
    },
    address: {
      line: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      postal: {
        type: String,
        trim: true,
      },
      district: {
        type: String,
        trim: true,
      },
    },
    complaints: [
      {
        type: ObjectId,
        ref: "Complaint",
      },
    ],
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

/**
 * Mongoose virtual for password encryption
 */
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

/**
 * Mongoose schema methods
 */
userSchema.methods = {
  /**
   * Hash password
   * @param {string} plainpass
   * @returns {string} hashed password
   */
  securePassword: function (plainpass) {
    if (!plainpass) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpass)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },

  /**
   * Authenticate user by password
   * @param {string} plainpass
   * @returns {boolean} Returns password match is true or false
   */
  authenticate: function (plainpass) {
    return this.securePassword(plainpass) === this.encry_password;
  },
};

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
