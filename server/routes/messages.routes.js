const MESSAGES_CONTROLLER = require("../controller/messages/messages.controller");
const express = require("express");
const router = express.Router();
router.get("", MESSAGES_CONTROLLER.all_messages);
router.post("/", MESSAGES_CONTROLLER.create_messages);
router.get("/:id", MESSAGES_CONTROLLER.single_messages);
router.patch("/:id", MESSAGES_CONTROLLER.update_messages);
router.delete("/:id", MESSAGES_CONTROLLER.delete_messages);
module.exports = router;
