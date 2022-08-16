require("dotenv").config({
  path: "./config.env",
});
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const errorHandler = require("./middleware/error");
const cors = require("cors");

connectDB();


const corsOrigin = ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"];
app.use(cors({ origin: corsOrigin, optionsSuccessStatus: 200 }));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use("/api/admin", require("./routes/admin"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});