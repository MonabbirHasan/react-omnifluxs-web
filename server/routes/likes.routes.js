const LIKES_CONTROLLER = require("../controller/likes/likes.controller");
const express = require("express");
const router = express.Router();
router.get("/", LIKES_CONTROLLER.all_likes);
router.post("/", LIKES_CONTROLLER.create_likes);
router.get("/:id", LIKES_CONTROLLER.single_likes);
router.patch("/:id", LIKES_CONTROLLER.update_likes);
router.delete("/:id", LIKES_CONTROLLER.delete_likes);
module.exports = router;
