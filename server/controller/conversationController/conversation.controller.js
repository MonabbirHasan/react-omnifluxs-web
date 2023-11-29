const CONVERSATIONS_MODELS = require("../../models/conversations.models");
class CONVERSATION_CONTROLLER {
  /*************************************
   * ALL CONVERSATIONS FROM MODELS
   *************************************/
  static all_conversation = async (req, res) => {
    try {
      await CONVERSATIONS_MODELS.all_conversation_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to retrieve conversation" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*************************************
   * SINGLE CONVERSATIONS FROM MODELS
   *************************************/
  static single_conversation = async (req, res) => {
    try {
      const { id } = req.params;
      await CONVERSATIONS_MODELS.single_conversation_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to retrieve singe conversation" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*************************************
   * CREATE CONVERSATIONS FROM MODELS
   *************************************/
  static create_conversation = async (req, res) => {
    try {
      const data = req.body;
      await CONVERSATIONS_MODELS.create_conversation_model(
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create conversation" });
          }
          res.status({
            message: "conversations create successfully",
            id: results.insertId,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /*************************************
   * UPDATE CONVERSATIONS FROM MODELS
   *************************************/
  static update_conversation = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await CONVERSATIONS_MODELS.update_conversation_model(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update conversations" });
          }
          if (results.effectedRow === 0) {
            return res.status(404).json({ message: "conversations not found" });
          }
          res
            .status(201)
            .json({ message: "conversations update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /*************************************
   * DELETE CONVERSATIONS FROM MODELS
   *************************************/
  static delete_conversation = async (req, res) => {
    try {
      const { id } = req.params;
      await CONVERSATIONS_MODELS.delete_conversation_model(
        id,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to delete conversations" });
          }
          if (results.effectedRow === 0) {
            return res.status(404).json({ message: "conversations not found" });
          }
          res.status({ message: "conversations delete successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = CONVERSATION_CONTROLLER;
