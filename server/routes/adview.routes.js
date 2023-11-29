const ADVIEW_CONTROLLER = require("../controller/adviewsController/adviews.controller");
const express = require("express");
const router = express.Router();
router.get("/", ADVIEW_CONTROLLER.all_adviews);
router.post("/", ADVIEW_CONTROLLER.create_adviews);
router.get("/:id", ADVIEW_CONTROLLER.single_adviews);
router.patch("/:id", ADVIEW_CONTROLLER.update_adviews);
router.delete("/:id", ADVIEW_CONTROLLER.delete_adviews);
module.exports = router;
