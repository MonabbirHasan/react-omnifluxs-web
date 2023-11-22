require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
/********************************
 * IMPORT ALL ROUTER START HERE
 ********************************/
const TestRouter = require("./routes/test.routes");
/****************************
 * ENCODED USES START HERE
 ****************************/
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/***********************************
 * ALL ROUTE HANDLING START HERE
 ***********************************/
app.use("/api/test", TestRouter);
/*************************************
 * WELCOME ROUTE HANDLING START HERE
 *************************************/
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
/************************************************
 * ROUTE NOT FOUND ERROR HANDLING START HERE
 ************************************************/
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found!", status: 404 });
});
/*************************************
 * SERVER ERROR HANDLING START HERE
 *************************************/
app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ message: "somthing is wrong!" + "" + err, status: 500 });
});
module.exports = app;
