const ORDERS_MODEL = require("../../models/order.models");
class ORDERS_CONTROLLER {
  /*************************
   * ALL ORDERS FROM MODEL
   *************************/
  static all_orders = async (req, res) => {
    try {
      ORDERS_MODEL.all_orders_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "fialed to get all orders" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*************************
   * SINGLE ORDERS FROM MODEL
   *************************/
  static single_orders = async (req, res) => {
    try {
      const { id } = req.params;
      ORDERS_MODEL.single_orders_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "fialed to get single orders" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*************************
   * CREATE ORDERS FROM MODEL
   *************************/
  static create_orders = async (req, res) => {
    try {
      const data = req.body;
      ORDERS_MODEL.create_orders_model(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create orders" });
        }
        res.status(201).json({
          message: "orders create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*************************
   * UPDATE ORDERS FROM MODEL
   *************************/
  static update_orders = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      ORDERS_MODEL.update_orders_model(id, data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to update orders" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "orders not found" });
        }
        res.status(200).json({ message: "orders update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*************************
   * DELETE ORDERS FROM MODEL
   *************************/
  static delete_orders = async (req, res) => {
    try {
      const { id } = req.params;
      ORDERS_MODEL.delete_orders_model(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to delete orders" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "orders not found" });
        }
        res.status(200).json({ message: "orders delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = ORDERS_CONTROLLER;
