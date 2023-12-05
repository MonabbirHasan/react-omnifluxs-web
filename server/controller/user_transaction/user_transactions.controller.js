const TRANSECTIONS_MODALS = require("../../models/transaction_modals");

class TRANSACTION_CONTROLLER {
  /************************************
   * ALL TRANSACTION FROM MODALS
   ************************************/
  static all_transaction = async (req, res) => {
    try {
      await TRANSECTIONS_MODALS.all_transection_modal((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to retrieve transaction" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   * SINGLE TRANSACTION FROM MODALS
   ************************************/
  static single_transaction = async (req, res) => {
    try {
      const { id } = req.params;
      await TRANSECTIONS_MODALS.single_transection_modal(id, (err, data) => {
        if (err) {
            console.log(err)
          return res
            .status(500)
            .json({ message: "failed to retrieve transaction" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   * CREATE TRANSACTION FROM MODALS
   ************************************/
  static create_transaction = async (req, res) => {
    try {
      const data = req.body;
      await TRANSECTIONS_MODALS.create_transection_modal(
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create transaction" });
          }
          res.status(201).json({
            message: "transaction create successfully",
            id: results.insertId,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   * UPDATE TRANSACTION FROM MODALS
   ************************************/
  static update_transaction = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await TRANSECTIONS_MODALS.update_transection_modal(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update transaction" });
          }
          if (results.effectedRow === 0) {
            return res.status(404).json({ message: "transaction not found" });
          }
          res.status(200).json({ message: "transaction update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   * DELETE TRANSACTION FROM MODALS
   ************************************/
  static delete_transaction = async (req, res) => {
    try {
      const { id } = req.params;
      await TRANSECTIONS_MODALS.delete_transection_modal(id, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete transaction" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "transaction not found" });
        }
        res.status(200).json({ message: "transaction delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = TRANSACTION_CONTROLLER;
