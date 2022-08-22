require("dotenv").config({
  path: "./.env",
});
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const studentModel = require("./models/student");
connectDB();

const seedProducts = [
  {
    studentName: "Weiwei",
    email: "aausaf990@gmail.com",
    studentCourse: "B.Tech",
    phoneNumber: "988888888",
    marksheet10th: "https://www.google.com",
    marksheet12th: "https://www.google.com",
    incomeCertificate: "https://www.google.com",
    domicileCertificate: "https://www.google.com",
    aadharCard: "https://www.google.com",
    incomeCertificate: "https://www.google.com",
    domicileCertificate: "https://www.google.com",
    instituteName: "IIT",
  },
  {
    studentName: "Aus",
    email: "test@gmail.com",
    studentCourse: "B.Tech",
    phoneNumber: "99999999",
    marksheet10th: "https://www.apple.com",
    marksheet12th: "https://www.apple.com",
    incomeCertificate: "https://www.apple.com",
    domicileCertificate: "https://www.apple.com",
    aadharCard: "https://www.apple.com",
    incomeCertificate: "https://www.apple.com",
    domicileCertificate: "https://www.apple.com",
    instituteName: "JMI",
  },
  {
    studentName: "Four",
    email: "test2@gmail.com",
    studentCourse: "B.Tech",
    phoneNumber: "999999998",
    marksheet10th: "https://www.abc.com",
    marksheet12th: "https://www.abc.com",
    incomeCertificate: "https://www.abc.com",
    domicileCertificate: "https://www.abc.com",
    aadharCard: "https://www.abc.com",
    incomeCertificate: "https://www.abc.com",
    domicileCertificate: "https://www.abc.com",
    instituteName: "JMI",
  }
];

const seedDB = async () => {
  try {
    await studentModel.deleteMany({});
    await studentModel.insertMany(seedProducts);
    console.log("Database seeded");
  } catch (err) {
    console.log(err);
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
