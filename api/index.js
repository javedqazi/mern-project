const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const useRoutes = require("./routes/user.route.js");
const authRoutes = require("./routes/auth.route.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongoDB database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(8005, () => {
  console.log("Server is running on port 8005!!");
});
app.use("/api/user", useRoutes);
app.use("/api/auth", authRoutes);

//next midleware
app.use((err, req, res, next) => {
  statusCode = err.statusCode || 500;
  const message = err.message || "Internal sever message";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
