const EMAILS_CONTROLLER = require("../controller/emails/emails.controller");
const express = require("express");
const router = express.Router();
router.get("/", EMAILS_CONTROLLER.all_emails);
router.post("/", EMAILS_CONTROLLER.create_emails);
router.get("/:id", EMAILS_CONTROLLER.single_emails);
router.patch("/:id", EMAILS_CONTROLLER.update_emails);
router.delete("/:id", EMAILS_CONTROLLER.delete_emails);
module.exports = router;
