const express = require("express");
const multer = require("multer");
const UserController = require("../controller/userController/users.controller");
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "E:/ALL_COURSES_FIEL/Project/SaaS/omnifluxs_web/server/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.delete("/:id", UserController.deletesuser);
router.patch("/:id",upload.single("user_image"), UserController.updateuser);
router.get("/:id", UserController.singleuser);
router.post("/", upload.single("user_image"), UserController.createuser);
router.get("/", UserController.alluser);
module.exports = router;
