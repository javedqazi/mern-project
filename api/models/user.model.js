const mongoose = require("mongoose");

const useScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unigue: true,
    },
    email: {
      type: String,
      required: true,
      unigue: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userScheme);

export default user;
