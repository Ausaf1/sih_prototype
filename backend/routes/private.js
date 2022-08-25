const express = require("express");
const router = express.Router();
const { getPrivateData, getPrivateDataInstitue } = require("../controllers/private");
const { protect, protects } = require("../middleware/auth");

router.route("/officer/dashboard").get(protect, getPrivateData);
router.route("/institute/dashboard").get(protects, getPrivateDataInstitue);

module.exports = router;
