const express = require("express");
const SUBSCRIPTION_PLAN_CONTROLLER = require("../controller/subscription_plan/subscription_plan.controller");
const router = express.Router();
router.get("/", SUBSCRIPTION_PLAN_CONTROLLER.all_subscriopton_plan);
router.post("/", SUBSCRIPTION_PLAN_CONTROLLER.create_subscriopton_plan);
router.get("/:id", SUBSCRIPTION_PLAN_CONTROLLER.single_subscriopton_plan);
router.patch("/:id", SUBSCRIPTION_PLAN_CONTROLLER.update_subscriopton_plan);
router.delete("/:id", SUBSCRIPTION_PLAN_CONTROLLER.delete_subscriopton_plan);
module.exports = router;
