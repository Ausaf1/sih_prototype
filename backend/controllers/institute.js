const Institute = require("../models/Institute");
const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/errorResponse");

exports.studentsInstitute = async (req, res, next) => {
  const { id } = req.params;
  const students = await Student.find({ instituteId: id });
  res.status(200).json({
    success: true,
    count: students.length,
    data: students,
  });
};

exports.addStudent = async (req, res, next) => {
  const {
    studentName,
    email,
    studentCourse,
    phoneNumber,
    marksheet10th,
    marksheet12th,
    incomeCertificate,
    domicileCertificate,
    aadharCard,
    instituteName,
    isSelected,
    status,
  } = req.body;
  const student = await Student.create({
    studentName,
    email,
    studentCourse,
    phoneNumber,
    marksheet10th,
    marksheet12th,
    incomeCertificate,
    domicileCertificate,
    aadharCard,
    instituteName,
    isSelected,
    status,
  });
  res.status(200).json({
    success: true,
    data: student,
  });
};

exports.updateProfile = async (req, res, next) => {
  const { id } = req.params;
  const {
    logo,
    instituteAddress,
    password,
    instituteEmail,
    bankName,
    bankAccountNumber,
    bankIfscCode,
    bankBranch,
    courseId,
  } = req.body;
  const institute = await Institute.findOne({ instituteId: id });
  const salt = await bcrypt.genSalt(10);
  if (institute) {
    await Institute.findOneAndUpdate(
      { instituteId: id },
      {
        logo,
        instituteAddress,
        password,
        instituteEmail,
        bankName,
        bankAccountNumber,
        bankIfscCode,
        bankBranch,
        courseId,
      }
    );
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        return next(new ErrorResponse(`Error hashing password`, 500));
      }
      await Institute.findOneAndUpdate({ instituteId: id }, { password: hash });
    });
    res.status(200).json({
      success: true,
      data: institute,
    });
  } else {
    const newInstitute = await Institute.create({
      instituteName,
      logo,
      instituteAddress,
      password,
      instituteEmail,
      bankName,
      bankAccountNumber,
      bankIfscCode,
      bankBranch,
      courseId,
    });
    res.status(200).json({
      success: true,
      data: newInstitute,
    });
  }
};
