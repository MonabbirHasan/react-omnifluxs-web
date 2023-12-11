const BLOG_POST_CONTROLLER = require("../controller/blog_post/blog_post.controller");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
/**************************************************
 * USER IMAGE UPLOAD USING MULTER FUNCTION HERE
 **************************************************/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDir = __dirname;
    const publicDir = path.join(currentDir, "../public");
    const uploadsDir = path.join(publicDir, "uploads/blog_post");
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.get("/", BLOG_POST_CONTROLLER.all_blog_post);
router.post(
  "/",
  upload.single("thumbnail"),
  BLOG_POST_CONTROLLER.create_blog_post
);
router.get("/:id", BLOG_POST_CONTROLLER.single_blog_post);
router.patch(
  "/:id",
  upload.single("thumbnail"),
  BLOG_POST_CONTROLLER.update_blog_post
);
router.delete("/:id", BLOG_POST_CONTROLLER.delete_blog_post);
module.exports = router;
