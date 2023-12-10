const COURSE_MODELS = require("../../models/course_sell.models");
class COURSE_CONTROLLER {
  /**************************
   * ALL COURSES FROM MODEL
   **************************/
  static all_course = (req, res) => {
    try {
      COURSE_MODELS.all_course_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get all course" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************
   * SINGLE COURSES FROM MODEL
   **************************/
  static single_course = (req, res) => {
    try {
      const { id } = req.params;
      COURSE_MODELS.single_course_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single course" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************
   * CREATE COURSES FROM MODEL
   **************************/
  static create_course = (req, res) => {
    try {
      const data = req.body;
      COURSE_MODELS.create_course_model(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create courses" });
        }
        res.status(201).json({
          message: "course create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************
   * UPDATE COURSES FROM MODEL
   **************************/
  static update_course = (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      COURSE_MODELS.update_course_model(id, data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "fialed to update courses" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "course not found" });
        }
        res.status(200).json({ message: "course update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************
   * DELETE COURSES FROM MODEL
   **************************/
  static delete_course = (req, res) => {
    try {
      const { id } = req.params;
      COURSE_MODELS.delete_course_model(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "fialed to delete courses" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "course not found" });
        }
        res.status(200).json({ message: "course delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = COURSE_CONTROLLER;
