const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    studentCourse: {
      type: String,
      required: true,
      sparse: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    marksheet10th: {
      type: String,
      required: true
    },
    marksheet12th: {
      type: String,
      required: true
    },
    incomeCertificate: {
      type: String,
      required: true,
      unique: true,
    },
    domicileCertificate: {
      type: String,
      required: true,
      unique: true,
    },
    aadharCard: {
      type: String,
      required: true,
      unique: true,
    },
    instituteName: {
      type: String,
      ref: "instituteId",
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

studentSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

studentSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

studentSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const student = mongoose.model("student", studentSchema);

module.exports = student;
