const LIKES_MODEL = require("../../models/likes.models");
class LIKES_CONTROLLER {
  /************************
   * ALL LIKES FROM MODEL
   ************************/
  static all_likes = (req, res) => {
    try {
      LIKES_MODEL.all_likes_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get all likes" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /****************************
   * SINGLE LIKES FROM MODEL
   ****************************/
  static single_likes = (req, res) => {
    try {
      const { id } = req.params;
      LIKES_MODEL.single_likes_model(id, (err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get single like" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***************************
   * CREATE LIKES FROM MODEL
   ***************************/
  static create_likes = (req, res) => {
    try {
      const data = req.body;
      LIKES_MODEL.create_likes_model(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create likes" });
        }
        res
          .status(201)
          .json({ message: "likes create successfully", id: results.insertId });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /****************************
   * UPDATE LIKES FROM MODEL
   ****************************/
  static update_likes = (req, res) => {
    try {
      const data = req.body;
      const { id } = req.params;
      LIKES_MODEL.update_likes_model(id, data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to update likes" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "likes not found" });
        }
        res.status(200).json({ message: "likes update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***************************
   * DELETE LIKES FROM MODEL
   ***************************/
  static delete_likes = (req, res) => {
    try {
      const { id } = req.params;
      LIKES_MODEL.delete_likes_model(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to delete likes" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "likes not found" });
        }
        res.status(200).json({ message: "likes delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = LIKES_CONTROLLER;
