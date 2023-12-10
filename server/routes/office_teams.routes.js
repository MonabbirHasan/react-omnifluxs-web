const OFFICE_TEAM_CONTROLLER = require("../controller/office_teams/office_teams.controller");
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
/*********************************************************
 * OFFICE TEAM IMAGE UPLOAD USING MULTER FUNCTION HERE
 *********************************************************/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDir = __dirname;
    const publicDir = path.join(currentDir, "../public");
    const uploadsDir = path.join(publicDir, "uploads/office_team");
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.patch(
  "/:id",
  upload.single("image"),
  OFFICE_TEAM_CONTROLLER.update_office_teams
);
router.post(
  "/",
  upload.single("image"),
  OFFICE_TEAM_CONTROLLER.create_office_teams
);
router.delete("/:id", OFFICE_TEAM_CONTROLLER.delete_office_teams);
router.get("/:id", OFFICE_TEAM_CONTROLLER.single_office_teams);
router.get("/", OFFICE_TEAM_CONTROLLER.all_office_teams);
module.exports = router;
