const CONTACT_MODELS = require("../../models/contact.models");
class CONTACT_CONTROLLER {
  /**************************
   * ALL CONTACT FROM MDOEL
   **************************/
  static all_contact = (req, res) => {
    try {
      CONTACT_MODELS.all_contact_models((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get all contact" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * SINGLE CONTACT FROM MDOEL
   *****************************/
  static single_contact = (req, res) => {
    try {
      const { id } = req.params;
      CONTACT_MODELS.single_contact_models(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single contact" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * CREATE CONTACT FROM MDOEL
   *****************************/
  static create_contact = (req, res) => {
    try {
      const data = req.body;
      CONTACT_MODELS.create_contact_models(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create contact" });
        }
        res.status(201).json({
          message: "contact create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * UPDATE CONTACT FROM MDOEL
   *****************************/
  static update_contact = (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      CONTACT_MODELS.update_contact_models(id, data, (err, results) => {
        if (err) {
            console.log(err)
          return res.status(500).json({ message: "failed to update" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "contact not found" });
        }
        res.status(200).json({ message: "contact update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * DELETE CONTACT FROM MDOEL
   *****************************/
  static delete_contact = (req, res) => {
    try {
      const { id } = req.params;
      CONTACT_MODELS.delete_contact_models(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to delete" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "contact not found" });
        }
        res.status(200).json({ message: "contact delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = CONTACT_CONTROLLER;
