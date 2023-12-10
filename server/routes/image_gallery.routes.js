const IMAGE_GALLERY_CONTROLLER = require("../controller/image_gallery/image_gallery.controller");
const express = require("express");
const router = express.Router();
router.get("/", IMAGE_GALLERY_CONTROLLER.all_image_gallery);
router.post("/", IMAGE_GALLERY_CONTROLLER.create_image_gallery);
router.get("/:id", IMAGE_GALLERY_CONTROLLER.single_image_gallery);
router.patch("/:id", IMAGE_GALLERY_CONTROLLER.update_image_gallery);
router.delete("/:id", IMAGE_GALLERY_CONTROLLER.delete_image_gallery);
module.exports = router;
