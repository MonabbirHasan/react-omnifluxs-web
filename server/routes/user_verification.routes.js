const USER_VERIFICATION_CONTROLLER = require("../controller/user_varification/user_verification.controller");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
/**************************************************
 *IMAGE UPLOAD USING MULTER FUNCTION HERE
 **************************************************/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDir = __dirname;
    const publicDir = path.join(currentDir, "../public");
    const uploadsDir = path.join(publicDir, "uploads/kyc");
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.get("/", USER_VERIFICATION_CONTROLLER.all_user_verification);
router.post(
  "/",
  upload.single("national_id_image"),
  USER_VERIFICATION_CONTROLLER.create_user_verification
);
router.get("/:id", USER_VERIFICATION_CONTROLLER.single_user_verification);
router.patch(
  "/:id",
  upload.single("national_id_image"),
  USER_VERIFICATION_CONTROLLER.update_user_verification
);
router.delete("/:id", USER_VERIFICATION_CONTROLLER.delete_user_verification);
module.exports = router;
