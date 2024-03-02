const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //   date: {
  //     type: Date,
  //     required: Date.now,
  //   },
  date: {
    type: Date,
    default: () => Date.now(), // Using a function to return the current date
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
