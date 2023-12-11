const express = require("express");
const CONNECTED_DEVICE_CONTROLLER = require("../controller/connected_device/connected_device.controller");
const router = express.Router();
router.get("/", CONNECTED_DEVICE_CONTROLLER.all_connected_device);
router.post("/", CONNECTED_DEVICE_CONTROLLER.create_connected_device);
router.get("/:id", CONNECTED_DEVICE_CONTROLLER.single_connected_device);
router.patch("/:id", CONNECTED_DEVICE_CONTROLLER.update_connected_device);
router.delete("/:id", CONNECTED_DEVICE_CONTROLLER.delete_connected_device);
module.exports = router;
