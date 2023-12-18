const EVENTS_CONTROLLER = require("../controller/events/events.controller");
const express = require("express");
const router = express.Router();
router.get("/", EVENTS_CONTROLLER.all_events);
router.post("/", EVENTS_CONTROLLER.create_events);
router.get("/:id", EVENTS_CONTROLLER.single_events);
router.patch("/:id", EVENTS_CONTROLLER.update_events);
router.delete("/:id", EVENTS_CONTROLLER.delete_events);
module.exports = router;
