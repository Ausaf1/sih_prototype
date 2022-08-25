const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database is connected");
}

module.exports = connectDB;