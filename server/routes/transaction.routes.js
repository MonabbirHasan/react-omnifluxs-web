const express = require("express");
const TRANSACTION_CONTROLLER = require("../controller/user_transaction/user_transactions.controller");
const router = express.Router();
router.get("/", TRANSACTION_CONTROLLER.all_transaction);
router.post("/", TRANSACTION_CONTROLLER.create_transaction);
router.get("/:id", TRANSACTION_CONTROLLER.single_transaction);
router.patch("/:id", TRANSACTION_CONTROLLER.update_transaction);
router.delete("/:id", TRANSACTION_CONTROLLER.delete_transaction);
module.exports = router;
