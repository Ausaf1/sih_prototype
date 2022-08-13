const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const instituteSchema = new mongoose.Schema(
  {
    instituteId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 1,
      maxlength: 20,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
      select: false,
    },
    instituteName: {
      type: String,
      required: true,
      trim: true
    },
    instituteCourse: {
      type: String,
      required: true,
      trim: true
    },
    instituteScholarship: {
      type: String,
      // required: true,
      trim: true
    },
    instituteRegister: {
      type: String,
      required: true,
      trim: true
    },
    password :{
      type: String,
      required: true,
      minlength: 6,
      maxlength: 20,
      select: false,
    },
    status: {
      type:String,
      default: "pending"
    }
  },
  { timestamps: true }
);

instituteSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

instituteSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

instituteSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

instituteSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const Institute = mongoose.model("Institute", instituteSchema);

module.exports = Institute;
