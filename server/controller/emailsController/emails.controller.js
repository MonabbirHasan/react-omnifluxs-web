const EMAILS_MODELS = require("../../models/emails.models");
class EMAILS_CONTROLLER {
  /****************************
   * ALL EMAILS FROM DB
   ****************************/
  static all_emails = async (req, res) => {
    try {
      await EMAILS_MODELS.all_emails_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to retrieve emails" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /****************************
   * SINGLE EMAILS FROM DB
   ****************************/
  static single_emails = async (req, res) => {
    try {
      const { id } = req.params;
      await EMAILS_MODELS.single_emails_model(id, (err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to retrieve emails" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /****************************
   * CREATE EMAILS FROM DB
   ****************************/
  static create_emails = async (req, res) => {
    try {
      const data = req.body;
      await EMAILS_MODELS.create_emails_model(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create emails" });
        }
        res.status(201).json({
          message: "emails create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /****************************
   * UPDATE EMAILS FROM DB
   ****************************/
  static update_emails = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await EMAILS_MODELS.update_emails_model(id, data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to update emails" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "emails not found" });
        }
        res.status(200).json({ message: "emails update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /****************************
   * DELETE EMAILS FROM DB
   ****************************/
  static delete_emails = async (req, res) => {
    try {
      const { id } = req.params;
      await EMAILS_MODELS.delete_emails_model(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to delete emails" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "emails not found" });
        }
        res.status(200).json({ message: "emails delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = EMAILS_CONTROLLER;
