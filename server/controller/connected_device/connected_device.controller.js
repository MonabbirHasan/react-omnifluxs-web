const CONNECTED_DEVICE_MODEL = require("../../models/connected_device.models");
class CONNECTED_DEVICE_CONTROLLER {
  /************************************
   * ALL CONNECTED DEVICE FROM MODEL
   ************************************/
  static all_connected_device = async (req, res) => {
    try {
      CONNECTED_DEVICE_MODEL.all_connected_device_models((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get all connected device" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   * SINGLE CONNECTED DEVICE FROM MODEL
   ************************************/
  static single_connected_device = async (req, res) => {
    try {
      const { id } = req.params;
      CONNECTED_DEVICE_MODEL.single_connected_device_models(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single connected device" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   * CREATE CONNECTED DEVICE FROM MODEL
   ************************************/
  static create_connected_device = async (req, res) => {
    try {
      const data = req.body;
      CONNECTED_DEVICE_MODEL.create_connected_device_models(
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create connected device" });
          }
          res.status(201).json({
            message: "connected device create successfully",
            id: results.insertId,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   * UPDATE CONNECTED DEVICE FROM MODEL
   ************************************/
  static update_connected_device = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      CONNECTED_DEVICE_MODEL.update_connected_device_models(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update connected device" });
          }
          if (results.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "connected device not found" });
          }
          res
            .status(200)
            .json({ message: "connected device update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   * DELETE CONNECTED DEVICE FROM MODEL
   ************************************/
  static delete_connected_device = async (req, res) => {
    try {
      const { id } = req.params;
      CONNECTED_DEVICE_MODEL.delete_connected_device_models(
        id,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to delete connected device" });
          }
          if (results.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "connected device not found" });
          }
          res
            .status(200)
            .json({ message: "connected device delete successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = CONNECTED_DEVICE_CONTROLLER;
