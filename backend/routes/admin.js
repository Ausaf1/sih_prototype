const express = require("express");
const router = express.Router();
const {
  getInstitute,
  CreateInstitute,
  updateInstitute,
  getParticularInstitute,
  deleteInstitute,
  getStudent,
  getParticularStudent,
  updateStudent,
  getAllSelectedStudent,
  updatePayment,
  getStudentByInstitute,
  addNotice
} = require("../controllers/admin");

router.route("/institute/create").post(CreateInstitute);
router.route("/institute/update/:id").put(updateInstitute);
router.route("/institute/:id").get(getParticularInstitute);
router.route("/institute/delete/:id").post(deleteInstitute);
router.route("/institute").get(getInstitute);
router.route("/students/:name").get(getStudent);
router.route("/student/:id").get(getParticularStudent);
router.route("/students/select/:name").post(updateStudent);
router.route("/students/selected").get(getAllSelectedStudent);
router.route("/students/payment").post(updatePayment);
router.route("/students/institute/:name").get(getStudentByInstitute);
router.route("/notice/add").post(addNotice);
module.exports = router;