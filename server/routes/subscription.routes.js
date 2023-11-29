const express = require("express");
const SUBSCRIPTION_CONTROLLER = require("../controller/subscriptionController/subscription.controller");
const router = express.Router();
router.get("/", SUBSCRIPTION_CONTROLLER.all_subscription);
router.post("/", SUBSCRIPTION_CONTROLLER.create_subscription);
router.get("/:id", SUBSCRIPTION_CONTROLLER.single_subscription);
router.patch("/:id", SUBSCRIPTION_CONTROLLER.update_subscription);
router.delete("/:id", SUBSCRIPTION_CONTROLLER.delete_subscription);
module.exports = router;
