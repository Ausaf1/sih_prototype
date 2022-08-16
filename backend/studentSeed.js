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
  },
];

const seedDB = async () => {
  try {
    // await officerModel.deleteMany({});
    await studentModel.create(seedProducts);
    console.log("Database seeded");
  } catch (err) {
    console.log(err);
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
seedIDB().then(() => {
  mongoose.connection.close();
});
