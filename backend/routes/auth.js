const express = require("express");
const router = express.Router();
const { login,ilogin, forgotPassword, resetPassword } = require("../controllers/auth");

router.route("/officerLogin").post(login);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:resetToken").post(resetPassword);
router.route("/instituteLogin").post(ilogin);

module.exports = router;
