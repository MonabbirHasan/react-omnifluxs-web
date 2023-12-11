const BLOG_CATEGORY_CONTROLLER = require("../controller/blog_category/blog_category.controller");
const express = require("express");
const router = express.Router();
router.get("/", BLOG_CATEGORY_CONTROLLER.all_blog_category);
router.post("/", BLOG_CATEGORY_CONTROLLER.create_blog_category);
router.get("/:id", BLOG_CATEGORY_CONTROLLER.single_blog_category);
router.patch("/:id", BLOG_CATEGORY_CONTROLLER.update_blog_category);
router.delete("/:id", BLOG_CATEGORY_CONTROLLER.delete_blog_category);
module.exports = router;
