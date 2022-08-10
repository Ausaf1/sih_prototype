const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controllers/private");
const { protect, protects } = require("../middleware/auth");

router.route("/officer/dashboard").get(protect, getPrivateData);
router.route("/institute/dashboard").get(protects, getPrivateData);

module.exports = router;
