// IMPORT LEARNER MODEL
const Learner = require("../models/learnerModel");

exports.getAllLearners = async (req, res) => {
  try {
    const learners = await Learner.find();

    res.status(200).json({
      status: "success",
      results: learners.length,
      data: {
        learners,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.createLearner = async (req, res) => {
  try {
    const newLearner = await Learner.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newLearner: newLearner,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
