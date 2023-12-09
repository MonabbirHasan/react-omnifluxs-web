const express = require("express");
const FILES_CONTROLLER = require("../controller/files/files.controller");
const router = express.Router();
router.get("/", FILES_CONTROLLER.all_files);
router.post("/", FILES_CONTROLLER.create_files);
router.get("/:id", FILES_CONTROLLER.single_files);
router.patch("/:id", FILES_CONTROLLER.update_files);
router.delete("/:id", FILES_CONTROLLER.delete_files);
module.exports = router;
