const FUNDS_MODALS = require("../../models/user_funds.models");
class FUNDS_CONTROLLER {
  /*************************************
   * ALL FUNDS FROM DB MODELS
   *************************************/
  static all_funds = async (req, res) => {
    try {
      await FUNDS_MODALS.all_funds_modal((err, data) => {
        if (err) {
          return res.status(500).json({ message: "Failed to retrieve funds" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*************************************
   * SINGLE FUNDS FROM DB MODELS
   *************************************/
  static single_funds = async (req, res) => {
    try {
      const { id } = req.params;
      await FUNDS_MODALS.single_funds_modal(id, (err, data) => {
        if (err) {
          return res.status(500).json({ message: "Failed to retrieve funds" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*************************************
   * CREATE FUNDS FROM DB MODELS
   *************************************/
  static create_funds = async (req, res) => {
    try {
      const data = req.body;
      await FUNDS_MODALS.create_funds_modal(data, (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Failed to create funds" });
        }
        res
          .status(201)
          .json({ message: "funds create successfully", id: result.insertId });
      });
    } catch (error) {
      console.err(error);
    }
  };
  /*************************************
   * UPDATE FUNDS FROM DB MODELS
   *************************************/
  static update_funds = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await FUNDS_MODALS.update_funds_modal(id, data, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: "failed to update funds" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "funds not found" });
        }
        res.status(200).json({ message: "funds update successfully" });
      });
    } catch (error) {}
  };
  /*************************************
   * DELETE FUNDS FROM DB MODELS
   *************************************/
  static delete_funds = async (req, res) => {
    const { id } = req.params;
    await FUNDS_MODALS.delete_funds_modal(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete funds" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "funds not found" });
      }
      res.json({ message: "funds deleted successfully" });
    });
  };
}
module.exports = FUNDS_CONTROLLER;
