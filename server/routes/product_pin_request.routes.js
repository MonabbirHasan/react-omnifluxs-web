const PRODUCT_PIN_REQUEST_CONTROLLER = require("../controller/product_pin_requests/product_pin_requests.controller");
const express = require("express");
const router = express.Router();
router.get("/", PRODUCT_PIN_REQUEST_CONTROLLER.all_product_pin_requests);
router.post("/", PRODUCT_PIN_REQUEST_CONTROLLER.create_product_pin_requests);
router.get("/:id", PRODUCT_PIN_REQUEST_CONTROLLER.single_product_pin_requests);
router.patch(
  "/:id",
  PRODUCT_PIN_REQUEST_CONTROLLER.update_product_pin_requests
);
router.delete(
  "/:id",
  PRODUCT_PIN_REQUEST_CONTROLLER.delete_product_pin_requests
);
module.exports = router;
