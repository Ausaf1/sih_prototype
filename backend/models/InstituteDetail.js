const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const InstituteDetail = new mongoose.Schema(
  {
    instituteId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    instituteName: {
      type: String,
      required: true,
        trim: true,
    },
    
    instituteCourse:{
        type: String,
        required: true,
    },
    instituteScholarship:{
        type: Number,
        required: true,
    },
    instituteRegister:{
        type: Date,
        required: true,
    }
  },
  { timestamps: true }
);

module.exports = InstituteDetail;
