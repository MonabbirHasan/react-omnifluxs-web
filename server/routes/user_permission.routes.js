const USER_PERMISSION_CONTROLLER = require("../controller/user_permissions/user_permissions.controller");
const express = require("express");
const router = express.Router();
router.get("/", USER_PERMISSION_CONTROLLER.all_user_permission);
router.post("/", USER_PERMISSION_CONTROLLER.create_user_permission);
router.get("/:id", USER_PERMISSION_CONTROLLER.single_user_permission);
router.patch("/:id", USER_PERMISSION_CONTROLLER.update_user_permission);
router.delete("/:id", USER_PERMISSION_CONTROLLER.delete_user_permission);
module.exports = router;
