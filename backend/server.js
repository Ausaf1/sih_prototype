const express = require("express");
const app = express();
const dotenv = require("dotenv");
const databaseConnection = require("./config/database");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config({
    path: "backend/config/config.env",
});

app.get("/", (req, res) => {
    res.send("ok");
});

databaseConnection();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
