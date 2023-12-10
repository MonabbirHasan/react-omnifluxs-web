const WEBSHOP_MODELS = require("../../models/webshop.models");
class WEBSHOP_CONTROLLER {
  /***************************
   * ALL WEBSITE FROM MODEL
   ***************************/
  static all_webshop = async (req, res) => {
    try {
      WEBSHOP_MODELS.all_webshop_models((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get all webshop" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***************************
   * SINGLE WEBSITE FROM MODEL
   ***************************/
  static single_webshop = async (req, res) => {
    try {
      const { id } = req.params;
      WEBSHOP_MODELS.single_webshop_models(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single webshop" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***************************
   * CREATE WEBSITE FROM MODEL
   ***************************/
  static create_webshop = async (req, res) => {
    try {
      const data = req.body;
      WEBSHOP_MODELS.create_webshop_models(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create webshop" });
        }
        res.status(201).json({
          message: "webshop create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***************************
   * UPDATE WEBSITE FROM MODEL
   ***************************/
  static update_webshop = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      WEBSHOP_MODELS.update_webshop_models(id, data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to update webshop" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "webshop not found" });
        }
        res.status(200).json({ message: "webshop update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***************************
   * DELETE WEBSITE FROM MODEL
   ***************************/
  static delete_webshop = async (req, res) => {
    try {
      const { id } = req.params;
      WEBSHOP_MODELS.delete_webshop_models(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to delete webshop" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "webshop not found" });
        }
        res.status(200).json({ message: "webshop delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = WEBSHOP_CONTROLLER;
