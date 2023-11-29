const MESSAGES_MODELS = require("../../models/message.models");
class MESSAGES_CONTROLLER {
  /******************************
   * ALL MESSAGES FROM MODELS
   ******************************/
  static all_messages = async (req, res) => {
    try {
      await MESSAGES_MODELS.all_message_modals((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to retrieve message" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /******************************
   * SINGLE MESSAGES FROM MODELS
   ******************************/
  static single_messages = async (req, res) => {
    try {
      const { id } = req.params;
      await MESSAGES_MODELS.single_message_modals(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to retrieve single message" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /******************************
   * CREATE MESSAGES FROM MODELS
   ******************************/
  static create_messages = async (req, res) => {
    try {
      const data = req.body;
      await MESSAGES_MODELS.create_message_modals(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create message" });
        }
        res.status(201).json({
          message: "message create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /******************************
   * UPDATE MESSAGES FROM MODELS
   ******************************/
  static update_messages = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await MESSAGES_MODELS.update_message_modals(id, data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to update message" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "message not found" });
        }
        res.status(200).json({ message: "message update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /******************************
   * DELETE MESSAGES FROM MODELS
   ******************************/
  static delete_messages = async (req, res) => {
    try {
      const { id } = req.params;
      await MESSAGES_MODELS.delete_message_modals(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to delete message" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "message not found" });
        }
        res.status(200).json({ message: "message delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = MESSAGES_CONTROLLER;
