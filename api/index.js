const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

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

app.listen(8005, () => {
  console.log("Server is running on port 8005");
});
