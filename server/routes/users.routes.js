const UserController = require("../controller/user/users.controller");
const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
/**************************************************
 *IMAGE UPLOAD USING MULTER FUNCTION HERE
 **************************************************/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDir = __dirname;
    const publicDir = path.join(currentDir, "../public");
    const uploadsDir = path.join(publicDir, "uploads");
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
/************************
 * ALL USER ROUTES HERE
 ************************/
router.patch("/:id", upload.single("user_image"), UserController.updateuser);
router.post("/", upload.single("user_image"), UserController.createuser);
router.delete("/:id", UserController.deletesuser);
router.get("/:id", UserController.singleuser);
router.post("/logout", UserController.logout);
router.post("/login", UserController.login);
router.get("/", UserController.alluser);
module.exports = router;
