const express = require("express");

// IMPORT ROUTER
const learnerRouter = require("./routes/learnerRouters");

const app = express();

app.use(express.json());

app.use("/learners", learnerRouter);

module.exports = app;
