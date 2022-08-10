const express = require("express");
const router = express.Router();
const { CreateInstitute } = require("../controllers/admin");

router.route("/create").post(CreateInstitute);
module.exports = router;