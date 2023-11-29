const ADS_CONTROLLER = require("../controller/ads/ads.controller");
const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
/**************************************************
 * ADS IMAGE UPLOAD USING MULTER FUNCTION HERE
 **************************************************/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDir = __dirname;
    const publicDir = path.join(currentDir, "../public");
    const uploadsDir = path.join(publicDir, "uploads/ads");
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
/************************
 * ALL ADS ROUTES HERE
 ************************/
router.get("/", ADS_CONTROLLER.all_ads);
router.post("/", upload.single("ads_file"), ADS_CONTROLLER.create_ads);
router.get("/:id", ADS_CONTROLLER.single_ads);
router.patch("/:id", upload.single("ads_file"), ADS_CONTROLLER.update_ads);
router.delete("/:id", ADS_CONTROLLER.delete_ads);
module.exports = router;
