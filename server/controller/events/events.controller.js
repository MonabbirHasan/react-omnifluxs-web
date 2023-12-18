const EVENTS_MODEL = require("../../models/events.models");
class EVENTS_CONTROLLER {
  /****************************
   * ALL EVENTS FROM MODELS
   ****************************/
  static all_events = async (req, res) => {
    try {
      EVENTS_MODEL.all_events_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get all events" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*******************************
   * SINGLE EVENTS FROM MODELS
   *******************************/
  static single_events = async (req, res) => {
    try {
      const { id } = req.params;
      EVENTS_MODEL.single_events_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single events" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*******************************
   * CREATE EVENTS FROM MODELS
   *******************************/
  static create_events = async (req, res) => {
    try {
      const data = req.body;
      EVENTS_MODEL.create_events_model(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create events" });
        }
        res.status(201).json({
          message: "events create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*******************************
   * UPDATE EVENTS FROM MODELS
   *******************************/
  static update_events = async (req, res) => {
    try {
      const data = req.body;
      const { id } = req.params;
      EVENTS_MODEL.update_events_model(id, data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to update events" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "events not found" });
        }
        res.status(200).json({ message: "events update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*******************************
   * DELETE EVENTS FROM MODELS
   *******************************/
  static delete_events = async (req, res) => {
    const { id } = req.params;
    EVENTS_MODEL.delete_events_model(id, (err, results) => {
      if (err) {
        return res.status(500).json({ message: "failed to delete events" });
      }
      res.status(200).json({ message: "events delete successfully" });
    });
  };
}
module.exports = EVENTS_CONTROLLER;
