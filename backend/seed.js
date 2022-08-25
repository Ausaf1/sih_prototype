require("dotenv").config({
  path: "./.env",
});
console.log(process.env.DATABASE_URL);
const officerModel = require("./models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const connectDB = require("./config/database");
const instituteModel=require("./models/Institute");
connectDB();

console.log(process.env.ADMIN_PASSWORD);
const seedProducts = [
  {
    officerId: "Admin-weiwei",
    email: "aausaf990@gmail.com",
    password: process.env.ADMIN_PASSWORD,
  },
];
const seedInstitute=[
  {
    instituteId:"Great-weiwei",
    password:"weiweiisbest",
  }
]
const seedDB = async () => {
  try {
    // await officerModel.deleteMany({});
    await officerModel.create(seedProducts);
    console.log("Database seeded");
  } catch (err) {
    console.log(err);
  }
};
const seedIDB=async()=>{
  try {
    // await officerModel.deleteMany({});
    await instituteModel.create(seedInstitute);
    console.log("Database seeded");
  } catch (err) {
    console.log(err);
  }
}
console.log(process.env.JWT_SECRET);
const generateToken = (officerId) => {
  const token = jwt.sign({ officerId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(token);
  return token;
};

generateToken("Admin-weiwei");
const generateTokens = (instituteId) => {
  const token = jwt.sign({ instituteId }, process.env.JWT_SECRET_2, {
    expiresIn: "30d",
  });
  console.log(token);
  return token;
};

generateTokens("great-weiwei");
seedDB().then(() => {
  mongoose.connection.close();
});
seedIDB().then(() => {
  mongoose.connection.close();
});
