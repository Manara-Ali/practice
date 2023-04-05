const express = require("express");

const cors = require("cors");

// IMPORT ROUTER
const learnerRouter = require("./routes/learnerRouters");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/learners", learnerRouter);

module.exports = app;
