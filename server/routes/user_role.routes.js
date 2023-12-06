const {
  all_user_role,
  create_user_role,
  single_user_role,
  update_user_role,
  delete_user_role,
} = require("../controller/user_role/user_role.controller");
const express = require("express");
const router = express.Router();
router.get("/", all_user_role);
router.post("/", create_user_role);
router.get("/:id", single_user_role);
router.patch("/:id", update_user_role);
router.delete("/:id", delete_user_role);
module.exports = router;
