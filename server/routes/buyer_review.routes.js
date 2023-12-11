const BUYER_REVIEW_CONTROLLER = require("../controller/buyer_reviews/buyer_reviews.controller");
const express = require("express");
const router = express.Router();
router.get("/", BUYER_REVIEW_CONTROLLER.all_buyer_review);
router.post("/", BUYER_REVIEW_CONTROLLER.create_buyer_review);
router.get("/:id", BUYER_REVIEW_CONTROLLER.single_buyer_review);
router.patch("/:id", BUYER_REVIEW_CONTROLLER.update_buyer_review);
router.delete("/:id", BUYER_REVIEW_CONTROLLER.delete_buyer_review);
module.exports = router;
