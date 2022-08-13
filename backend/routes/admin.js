const express = require("express");
const router = express.Router();
const {
  getInstitute,
  CreateInstitute,
  updateInstitute,
  getParticularInstitute,
  deleteInstitute,
} = require("../controllers/admin");

router.route("/institute/create").post(CreateInstitute);
router.route("/institute/update/:id").put(updateInstitute);
router.route("/institute/:id").get(getParticularInstitute);
router.route("/institute/delete/:id").post(deleteInstitute);
router.route("/institute").get(getInstitute);
module.exports = router;
