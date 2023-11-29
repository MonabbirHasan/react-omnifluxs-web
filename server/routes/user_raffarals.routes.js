const USER_RAFFARAL_CONTROLLER = require("../controller/user_raffarals/user_raffaral.controller");
const express = require("express");
const router = express.Router();
router.get("/", USER_RAFFARAL_CONTROLLER.all_user_raffaral);
router.post("/", USER_RAFFARAL_CONTROLLER.create_user_raffaral);
router.get("/:id", USER_RAFFARAL_CONTROLLER.single_user_raffaral);
router.patch("/:id", USER_RAFFARAL_CONTROLLER.update_user_raffaral);
router.delete("/:id", USER_RAFFARAL_CONTROLLER.delete_user_raffaral);
module.exports = router;
