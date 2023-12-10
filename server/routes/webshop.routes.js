const WEBSHOP_CONTROLLER = require("../controller/webshop/webshop.controller");
const express = require("express");
const router = express.Router();
router.get("/", WEBSHOP_CONTROLLER.all_webshop);
router.post("/", WEBSHOP_CONTROLLER.create_webshop);
router.get("/:id", WEBSHOP_CONTROLLER.single_webshop);
router.patch("/:id", WEBSHOP_CONTROLLER.update_webshop);
router.delete("/:id", WEBSHOP_CONTROLLER.delete_webshop);
module.exports = router;
