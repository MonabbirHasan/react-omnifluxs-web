const COURSE_CONTROLLER = require("../controller/courses/course.controller");
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
/*********************************
 * COURSE FILE UPLOAD FUNC HERE
 *********************************/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDir = __dirname;
    const publicDir = path.join(currentDir, "../public");
    const uploadsDir = path.join(publicDir, "uploads/courses");
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.get("/", COURSE_CONTROLLER.all_course);
router.post("/", upload.single("course_file"), COURSE_CONTROLLER.create_course);
router.get("/:id", COURSE_CONTROLLER.single_course);
router.patch(
  "/:id",
  upload.single("course_file"),
  COURSE_CONTROLLER.update_course
);
router.delete("/:id", COURSE_CONTROLLER.delete_course);
module.exports = router;
