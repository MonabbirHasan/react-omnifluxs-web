const BUYER_REVIEW_MODELS = require("../../models/buyer_reviews.models");
class BUYER_REVIEW_CONTROLLER {
  /*******************************
   * ALL BUYER REVIEW FROM MODEL
   *******************************/
  static all_buyer_review = (req, res) => {
    try {
      BUYER_REVIEW_MODELS.all_buyer_review_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get all buyer review" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************************
   * SINGLE BUYER REVIEW FROM MODEL
   ***********************************/
  static single_buyer_review = (req, res) => {
    try {
      const { id } = req.params;
      BUYER_REVIEW_MODELS.single_buyer_review_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single buyer review" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*********************************
   * CREATE BUYER REVIEW FROM MODEL
   *********************************/
  static create_buyer_review = (req, res) => {
    try {
      const data = req.body;
      BUYER_REVIEW_MODELS.create_buyer_review_model(data, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create buyer review" });
        }
        res.status(201).json({
          message: "buyer review create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************************
   * UPDATE BUYER REVIEW FROM MODEL
   ***********************************/
  static update_buyer_review = (req, res) => {
    try {
      const data = req.body;
      const { id } = req.params;
      BUYER_REVIEW_MODELS.update_buyer_review_model(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update buyer review" });
          }
          if (results.effectedRow === 0) {
            return res.status(404).json({ message: "buyer review not found" });
          }
          res.status(200).json({ message: "buyer review update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   * DELETE BUYER REVIEW FROM MODEL
   ************************************/
  static delete_buyer_review = (req, res) => {
    try {
      const { id } = req.params;
      BUYER_REVIEW_MODELS.delete_buyer_review_model(id, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete buyer review" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "buyer review not found" });
        }
        res.status(200).json({ message: "buyer review delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = BUYER_REVIEW_CONTROLLER;
