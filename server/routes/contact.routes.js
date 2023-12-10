const CONTACT_CONTROLLER = require("../controller/contact/contact.controller");
const express = require("express");
const router = express.Router();
router.get("/", CONTACT_CONTROLLER.all_contact);
router.post("/", CONTACT_CONTROLLER.create_contact);
router.get("/:id", CONTACT_CONTROLLER.single_contact);
router.patch("/:id", CONTACT_CONTROLLER.update_contact);
router.delete("/:id", CONTACT_CONTROLLER.delete_contact);
module.exports = router;
