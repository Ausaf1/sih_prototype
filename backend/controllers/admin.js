// const InstituteDetail = require("../models/InstituteDetail");
const Institute = require("../models/Institute");
const Student = require("../models/Student");
const Notice = require("../models/Notice");
const ErrorResponse = require("../utils/errorResponse");

exports.CreateInstitute = async (req, res, next) => {
  const newInstitute = new Institute(req.body);
  const existingInstitute = await Institute.findOne({
    instituteId: req.body.instituteId,
  });
  if (existingInstitute) {
    return next(new ErrorResponse(`Institute already exists`, 400));
  }
  if (newInstitute.instituteId === "") {
    return next(new ErrorResponse(`Please enter instituteId`, 400));
  }
  if (newInstitute.instituteName === "") {
    return next(new ErrorResponse(`Please enter instituteName`, 400));
  }
  if (newInstitute.instituteCourse === "") {
    return next(new ErrorResponse(`Please enter instituteCourse`, 400));
  }
  if (newInstitute.instituteScholarship === "") {
    return next(new ErrorResponse(`Please enter instituteScholarship`, 400));
  }
  if (newInstitute.instituteRegister === "") {
    return next(new ErrorResponse(`Please enter instituteRegister`, 400));
  }
  if (newInstitute.password === "") {
    return next(new ErrorResponse(`Please enter institutePassword`, 400));
  }

  try {
    await newInstitute.save();
    res.status(200).json({
      success: true,
      data: newInstitute,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(`${err.message}`, 400));
  }
};

exports.getInstitute = async (req, res, next) => {
  try {
    const institute = await Institute.find();
    const instituteArray = institute.map((institute) => {
      return {
        id: institute._id,
        InstituteId: institute.instituteId,
        instituteName: institute.instituteName,
        instituteCourse: institute.instituteCourse,
        // instituteScholarship: institute.instituteScholarship,
        instituteRegister: institute.instituteRegister,
        status: institute.status,
        courseId: institute.courseId,
        instituteId: institute.instituteId,
      };
    });

    res.status(200).json({
      success: true,
      data: instituteArray,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(`${err.message}`, 400));
  }
};

exports.updateInstitute = async (req, res, next) => {
  const { id } = req.params;
  const {
    instituteId,
    instituteName,
    instituteCourse,
    // instituteScholarship,
    instituteRegister,
    status,
  } = req.body;
  const institute = await Institute.findById({ _id: id });
  if (!institute) {
    return next(new ErrorResponse(`Institute not found`, 404));
  }
  institute.instituteId = instituteId;
  institute.instituteName = instituteName;
  institute.instituteCourse = instituteCourse;
  // institute.instituteScholarship = instituteScholarship;
  institute.instituteRegister = instituteRegister;
  institute.status = status;
  try {
    await institute.save();
    res.status(200).json({
      success: true,
      data: institute,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(`${err.message}`, 400));
  }
};

exports.getParticularInstitute = async (req, res, next) => {
  const { id } = req.params;
  const institute = await Institute.findById({ _id: id });
  if (!institute) {
    return next(new ErrorResponse(`Institute not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: institute,
  });
};

exports.getParticularStudent = async (req, res, next) => {
  const { id } = req.params;
  const student = await Student.findById({ _id: id });
  if (!student) {
    return next(new ErrorResponse(`Institute not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: student,
  });
};

exports.deleteInstitute = async (req, res, next) => {
  // console.log(req);
  const { id } = req.params;
  console.log(id);
  const institute = await Institute.findByIdAndDelete({ _id: id });
  console.log(institute);
  if (!institute) {
    return next(new ErrorResponse(`Institute not found`, 404));
  }
  res.status(200).json({
    success: true,
    data: institute,
  });
};
exports.getStudent = async (req, res, next) => {
  try {
    const student = await Student.find();
    // get only not selected student
    const studentArray = student
      .filter((student) => {
        return student.isSelected === true;
      })
      .map((student) => {
        return {
          id: student._id,
          studentId: student.studentId,
          studentName: student.studentName,
          studentCourse: student.studentCourse,
          phoneNumber: student.phoneNumber,
          email: student.email,
          marksheet10th: student.marksheet10th,
          marksheet12th: student.marksheet12th,
          incomeCertificate: student.incomeCertificate,
          domicileCertificate: student.domicileCertificate,
          aadharCard: student.aadharCard,
          instituteName: student.instituteName,
          status: student.status,
        };
      });

    res.status(200).json({
      success: true,
      data: studentArray,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(`${err.message}`, 400));
  }
};

exports.updateStudent = async (req, res, next) => {
  const ids = req.body;
  // console.log(ids);
  const arrayIds = Object.values(ids);
  console.log(arrayIds);
  arrayIds[0]?.map((id) =>
    Student.findByIdAndUpdate(id, { isSelected: true }, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        console.log({
          doc: doc,
        });
      }
    })
  );
  res.status(200).json({
    success: true,
    data: arrayIds,
  });
};

exports.updatePayment = async (req, res, next) => {
  const ids = req.body;
  // console.log(ids);
  const arrayIds = Object.values(ids);
  console.log(arrayIds);
  arrayIds[0]?.map((id) =>
    Student.findByIdAndUpdate(id, { status: "complete" }, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        console.log({
          doc: doc,
        });
      }
    })
  );
  res.status(200).json({
    success: true,
    data: arrayIds,
  });
};

exports.getAllSelectedStudent = async (req, res, next) => {
  try {
    const student = await Student.find();
    // get only selected student
    const studentArray = student
      .filter((student) => {
        console.log(student.isSelected);
        return student.isSelected === true;
      })
      .map((student) => {
        return {
          id: student._id,
          studentId: student.studentId,
          studentName: student.studentName,
          studentCourse: student.studentCourse,
          phoneNumber: student.phoneNumber,
          email: student.email,
          marksheet10th: student.marksheet10th,
          marksheet12th: student.marksheet12th,
          incomeCertificate: student.incomeCertificate,
          domicileCertificate: student.domicileCertificate,
          aadharCard: student.aadharCard,
          instituteName: student.instituteName,
          status: student.status,
        };
      });
    res.status(200).json({
      success: true,
      data: studentArray,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(`${err.message}`, 400));
  }
};

exports.getStudentByInstitute = async (req, res, next) => {
  const { name } = req.params;
  console.log(name);
  try {
    const student = await Student.find({ instituteName: name });
    const studentArray = student.map((student) => {
      return {
        id: student._id,
        studentId: student.studentId,
        studentName: student.studentName,
        studentCourse: student.studentCourse,
        phoneNumber: student.phoneNumber,
        email: student.email,
        marksheet10th: student.marksheet10th,
        marksheet12th: student.marksheet12th,
        incomeCertificate: student.incomeCertificate,
        domicileCertificate: student.domicileCertificate,
        aadharCard: student.aadharCard,
        instituteName: student.instituteName,
        status: student.status,
      };
    });
    res.status(200).json({
      success: true,
      data: studentArray,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(`${err.message}`, 400));
  }
};

exports.addNotice = async (req, res, next) => {
  const { notice } = req.body;
  // console.log(notice);
  const newNotice = new Notice({
    notice: notice,
  });
  await newNotice.save();
  res.status(200).json({
    success: true,
    data: newNotice,
  });
};
