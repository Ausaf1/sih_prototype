const express = require("express");
const router = express.Router();
const { login, forgotPassword, resetPassword } = require("../controllers/auth");

router.route("/officerLogin").post(login);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:resetToken").post(resetPassword);

module.exports = router;
