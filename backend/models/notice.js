const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    notice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", noticeSchema);
