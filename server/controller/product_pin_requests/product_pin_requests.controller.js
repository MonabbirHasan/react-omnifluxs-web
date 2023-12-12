const PRODUCT_PIN_REQUEST_MODEL = require("../../models/product_pin_requests.models");
class PRODUCT_PIN_REQUEST_CONTROLLER {
  /**************************************
   * ALL PRODUCT PIN REQUEST FROM MODEL
   **************************************/
  static all_product_pin_requests = async (req, res) => {
    try {
      PRODUCT_PIN_REQUEST_MODEL.all_product_pin_request_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get all product pin request" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************************
   * SINGLE PRODUCT PIN REQUEST FROM MODEL
   *****************************************/
  static single_product_pin_requests = async (req, res) => {
    try {
      const { id } = req.params;
      PRODUCT_PIN_REQUEST_MODEL.single_product_pin_request_model(
        id,
        (err, data) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to get single product pin request" });
          }
          res.status(200).json(data);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /****************************************
   * CREATE PRODUCT PIN REQUEST FROM MODEL
   ****************************************/
  static create_product_pin_requests = async (req, res) => {
    try {
      const data = req.body;
      PRODUCT_PIN_REQUEST_MODEL.create_product_pin_request_model(
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create product pin request" });
          }
          res.status(201).json({
            message: "product pin request create successfully",
            id: results.insertId,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************************
   * UPDATE PRODUCT PIN REQUEST FROM MODEL
   *****************************************/
  static update_product_pin_requests = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      PRODUCT_PIN_REQUEST_MODEL.update_product_pin_request_model(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update product pin request" });
          }
          if (results.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "product pin request not found" });
          }
          res
            .status(200)
            .json({ message: "product pin request update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /****************************************
   * DELETE PRODUCT PIN REQUEST FROM MODEL
   ****************************************/
  static delete_product_pin_requests = async (req, res) => {
    try {
      const { id } = req.params;
      PRODUCT_PIN_REQUEST_MODEL.delete_product_pin_request_model(
        id,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to delete product pin request" });
          }
          if (results.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "product pin request not found" });
          }
          res
            .status(200)
            .json({ message: "product pin request delete successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = PRODUCT_PIN_REQUEST_CONTROLLER;
