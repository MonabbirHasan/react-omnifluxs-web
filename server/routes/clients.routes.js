const CLIENTS_CONTROLLER = require("../controller/own_clients/clients.controller");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
/**************************************************
 *IMAGE UPLOAD USING MULTER FUNCTION HERE
 **************************************************/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDir = __dirname;
    const publicDir = path.join(currentDir, "../public");
    const uploadsDir = path.join(publicDir, "uploads/clients_img");
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
router.get("/", CLIENTS_CONTROLLER.all_clients);
router.post("/", upload.single("image"), CLIENTS_CONTROLLER.create_clients);
router.get("/:id", CLIENTS_CONTROLLER.single_clients);
router.patch("/:id", upload.single("image"), CLIENTS_CONTROLLER.update_clients);
router.delete("/:id", CLIENTS_CONTROLLER.delete_clients);
module.exports = router;
