const CONVERSATION_CONTROLLER = require("../controller/conversationController/conversation.controller");
const express = require("express");
const router = express.Router();
router.get("/", CONVERSATION_CONTROLLER.all_conversation);
router.post("/", CONVERSATION_CONTROLLER.create_conversation);
router.get("/:id", CONVERSATION_CONTROLLER.single_conversation);
router.patch("/:id", CONVERSATION_CONTROLLER.update_conversation);
router.delete("/:id", CONVERSATION_CONTROLLER.delete_conversation);
module.exports = router;
