const express = require("express");
const FUNDS_CONTROLLER = require("../controller/user_fundsController/user_funds.controller");
const router = express.Router();

router.get("/", FUNDS_CONTROLLER.all_funds);
router.post("/", FUNDS_CONTROLLER.create_funds);
router.get("/:id", FUNDS_CONTROLLER.single_funds);
router.patch("/:id", FUNDS_CONTROLLER.update_funds);
router.delete("/:id", FUNDS_CONTROLLER.delete_funds);
module.exports = router;
