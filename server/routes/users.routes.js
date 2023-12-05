const express = require("express");
const multer = require("multer");
const path = require("path");
const UserController = require("../controller/user/users.controller");
const router = express.Router();
/**************************************************
 * USER IMAGE UPLOAD USING MULTER FUNCTION HERE
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
router.get("/", UserController.alluser);
module.exports = router;
