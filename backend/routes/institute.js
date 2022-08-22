const express = require("express");
const router = express.Router();
const { studentsInstitute, addStudent,updateProfile } = require("../controllers/institute");


router.route("/getStudents/:name").get(studentsInstitute);
router.route("/addStudent").post(addStudent);
router.route("/updateProfile/:id").post(updateProfile);
module.exports = router;
