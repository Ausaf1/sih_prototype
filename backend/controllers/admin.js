// const InstituteDetail = require("../models/InstituteDetail");
const Institute = require("../models/Institute");
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

// const data = require("./dataSource.json")

// exports.getInstitute = async (req, res, next) => {
//   return res.json({
//     result : data,
//     count : data.length,
//   })
// }
