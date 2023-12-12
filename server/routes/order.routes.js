const ORDERS_CONTROLLER = require("../controller/orders/orders.controller");
const express = require("express");
const router = express.Router();
router.get("/", ORDERS_CONTROLLER.all_orders);
router.post("/", ORDERS_CONTROLLER.create_orders);
router.get("/:id", ORDERS_CONTROLLER.single_orders);
router.patch("/:id", ORDERS_CONTROLLER.update_orders);
router.delete("/:id", ORDERS_CONTROLLER.delete_orders);
module.exports = router;
