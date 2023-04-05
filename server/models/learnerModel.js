// IMPORT MONGOOSE TO CREATE SCHEMA
const mongoose = require("mongoose");

const learnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Each learner must have a name"],
  },
  grade: {
    type: Number,
    required: [true, "Each learner must have a grade"],
  },
});

const Learner = mongoose.model("Learner", learnerSchema);

module.exports = Learner;
