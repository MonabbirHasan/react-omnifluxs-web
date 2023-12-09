const FILES_MODELS = require("../../models/files.models");
class FILES_CONTROLLER {
  /********************************
   * ALL FILES FROM MODLES
   *******************************/
  static all_files = async (req, res) => {
    try {
      FILES_MODELS.all_files_models((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get files" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /********************************
   * SINGLE FILES FROM MODLES
   *******************************/
  static single_files = async (req, res) => {
    try {
      const { id } = req.params;
      FILES_MODELS.single_files_models(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "fialed to get sinlge files" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /********************************
   * CREATE FILES FROM MODLES
   *******************************/
  static create_files = async (req, res) => {
    try {
      const data = req.body;
      FILES_MODELS.create_files_models(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "fialed to create files" });
        }
        res.status(201).json({
          message: "files created successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /********************************
   * UPDATE FILES FROM MODLES
   *******************************/
  static update_files = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      FILES_MODELS.update_files_models(id, data, (err, results) => {
        if (err) {
            console.log(err)
          return res.status(500).json({ message: "fialed to update files" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "files not found!" });
        }
        res.status(200).json({ message: "files updated successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /********************************
   * DELETE FILES FROM MODLES
   *******************************/
  static delete_files = async (req, res) => {
    try {
      const { id } = req.params;
      FILES_MODELS.delete_files_models(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "fialed to delete files" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "files not found!" });
        }
        res.status(200).json({ message: "files delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = FILES_CONTROLLER;
