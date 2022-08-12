const express = require("express");
const router = express.Router();
const { getInstitute,CreateInstitute } = require("../controllers/admin");

router.route("/institute/create").post(CreateInstitute);
router.route("/institute").get(getInstitute);
module.exports = router;
