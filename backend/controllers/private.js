const Institute = require("../models/Institute");

exports.getPrivateDataInstitue = async (req, res, next) => {
  const { user } = req;
  console.log(user);
  try {
    const institute = await Institute.findById(user.id);
    res.status(200).json({
      success: true,
      data: institute,
    });
  } catch (err) {
    next(err);
  }
};

exports.getPrivateData = (req, res, next) => {
  const { user } = req;
  res.status(200).json({
    success: true,
    data: user,
  });
};
