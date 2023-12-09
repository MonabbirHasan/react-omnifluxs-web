const FOLDERS_CONTROLLER = require("../controller/folders/folders.controller");
const express = require("express");
const router = express.Router();
router.get("/", FOLDERS_CONTROLLER.all_folders);
router.post("/", FOLDERS_CONTROLLER.create_folders);
router.get("/:id", FOLDERS_CONTROLLER.single_folders);
router.patch("/:id", FOLDERS_CONTROLLER.update_folders);
router.delete("/:id", FOLDERS_CONTROLLER.delete_folders);
module.exports = router;
