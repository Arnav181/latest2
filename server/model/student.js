const mongoose = require("mongoose");
const { type } = require("os");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("student-details", studentSchema);

module.exports = {
  Student,
};
