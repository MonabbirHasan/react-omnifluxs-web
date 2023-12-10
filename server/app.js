require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
/********************************
 * IMPORT ALL ROUTER START HERE
 ********************************/
const UserRolePermissionRouter = require("./routes/user_role_permission.routes");
const SubscriptionPlanRouter = require("./routes/subscription_plan.routes");
const UserPermissionRouter = require("./routes/user_permission.routes");
const UserTransactionRouter = require("./routes/transaction.routes");
const UserRaffaralRouter = require("./routes/user_raffarals.routes");
const ImageGalleryRouter = require("./routes/image_gallery.routes");
const SubscriptionRouter = require("./routes/subscription.routes");
const officeTeamRouter = require("./routes/office_teams.routes");
const UserFoundsRouter = require("./routes/user_funds.routes");
const MessageRouter = require("./routes/messages.routes");
const FoldersRouter = require("./routes/folders.routes");
const WebshopRouter = require("./routes/webshop.routes");
const ContactRouter = require("./routes/contact.routes");
const AdviewRouter = require("./routes/adview.routes");
const EmailsRouter = require("./routes/emails.routes");
const CourseRouter = require("./routes/course.routes");
const UserRole = require("./routes/user_role.routes");
const UsersRouter = require("./routes/users.routes");
const FilesRouter = require("./routes/files.routes");
const AdsRouter = require("./routes/ads.routes");
/****************************
 * ENCODED USES START HERE
 ****************************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
/***********************************
 * ALL ROUTE HANDLING START HERE
 ***********************************/
app.use("/api/user-role-permission", UserRolePermissionRouter);
app.use("/api/subscription_plan", SubscriptionPlanRouter);
app.use("/api/user-permission", UserPermissionRouter);
app.use("/api/user_raffarals", UserRaffaralRouter);
app.use("/api/transaction", UserTransactionRouter);
app.use("/api/image-gallery", ImageGalleryRouter);
app.use("/api/subscription", SubscriptionRouter);
app.use("/api/office-teams", officeTeamRouter);
app.use("/api/funds", UserFoundsRouter);
app.use("/api/messages", MessageRouter);
app.use("/api/contact", ContactRouter);
app.use("/api/folders", FoldersRouter);
app.use("/api/webshop", WebshopRouter);
app.use("/api/adviews", AdviewRouter);
app.use("/api/courses", CourseRouter);
app.use("/api/emails", EmailsRouter);
app.use("/api/user-role", UserRole);
app.use("/api/users", UsersRouter);
app.use("/api/files", FilesRouter);
app.use("/api/ads", AdsRouter);
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
