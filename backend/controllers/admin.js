const InstituteDetail = require("../models/InstituteDetail");
const ErrorResponse = require("../utils/errorResponse");

exports.CreateInstitute = async (req, res, next) => {
  const {
    instituteId,
    instituteName,
    instituteCourse,
    // instituteScholarship,
    instituteRegister,
  } = req.body;
  if (
    !instituteId ||
    !instituteName ||
    !instituteCourse ||
    // !instituteScholarship ||
    !instituteRegister
  ) {
    return next(
      new ErrorResponse(
        "Please provide instituteId, instituteName, instituteCourse, instituteScholarship, instituteRegister",
        400
      )
    );
  }
  try {
    // add new InstituteDetail
    const newInstituteDetail = new InstituteDetail({
        instituteId,
        instituteName,
        instituteCourse,
        // instituteScholarship,
        instituteRegister,
      });
    const result = await newInstituteDetail.save();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
