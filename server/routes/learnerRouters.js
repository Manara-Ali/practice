// IMPORT EXPRESS TO CREATE NEW ROUTERS
const express = require("express");

// IMPORT LEARNER CONTROLLER
const learnerController = require("../controllers/learnerControllers");

const router = express.Router();

router
  .route("/")
  .get(learnerController.getAllLearners)
  .post(learnerController.createLearner);

module.exports = router;
