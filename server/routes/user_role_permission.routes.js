const USER_ROLE_PERMISSION_CONTROLLER = require("../controller/user_role_permission/user_role_permission.controller");
const express = require("express");
const router = express.Router();
router.get("/", USER_ROLE_PERMISSION_CONTROLLER.all_user_role_permission);
router.post("/", USER_ROLE_PERMISSION_CONTROLLER.create_user_role_permission);
router.get("/:id", USER_ROLE_PERMISSION_CONTROLLER.single_user_role_permission);
router.patch(
  "/:id",
  USER_ROLE_PERMISSION_CONTROLLER.update_user_role_permission
);
router.delete(
  "/:id",
  USER_ROLE_PERMISSION_CONTROLLER.delete_user_role_permission
);
module.exports = router;
