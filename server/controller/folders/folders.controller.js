const FOLDER_MODEL = require("../../models/folder.models");
class FOLDERS_CONTROLLER {
  /***************************
   * ALL FOLDER FROM MODELS
   ***************************/
  static all_folders = async (req, res) => {
    try {
      FOLDER_MODEL.all_folder_models((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get folders" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***************************
   * SINGLE FOLDER FROM MODELS
   ***************************/
  static single_folders = async (req, res) => {
    try {
      const { id } = req.params;
      FOLDER_MODEL.single_folder_models(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single folder" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***************************
   * CREATE FOLDER FROM MODELS
   ***************************/
  static create_folders = async (req, res) => {
    try {
      const data = req.body;
      FOLDER_MODEL.create_folder_models(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create folder" });
        }
        res.status(201).json({
          message: "folder create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***************************
   * UPDATE FOLDER FROM MODELS
   ***************************/
  static update_folders = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      FOLDER_MODEL.update_folder_models(id, data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to update folders" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "folders not found!" });
        }
        res.status(200).json({ message: "folders updated successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***************************
   * DELETE FOLDER FROM MODELS
   ***************************/
  static delete_folders = async (req, res) => {
    try {
      const { id } = req.params;
      FOLDER_MODEL.delete_folder_models(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to delete folders" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "folders not found!" });
        }
        res.status(200).json({ message: "folders delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = FOLDERS_CONTROLLER;
