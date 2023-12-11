const BLOG_COMMENT_CONTROLLER = require("../controller/blog_comment/blog_comment.controller");
const express = require("express");
const router = express.Router();
router.get("/", BLOG_COMMENT_CONTROLLER.all_blog_comment);
router.post("/", BLOG_COMMENT_CONTROLLER.create_blog_comment);
router.get("/:id", BLOG_COMMENT_CONTROLLER.single_blog_comment);
router.patch("/:id", BLOG_COMMENT_CONTROLLER.update_blog_comment);
router.delete("/:id", BLOG_COMMENT_CONTROLLER.delete_blog_comment);
module.exports = router;
