const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required..!"],
  },
  role: {
    type: String,
    enum: ["user", "admin", "supplier"],
    default: "user",
  },
  email: {
    type: String,
    required: [true, "Email must needed"],
    validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
