const USER_ROLE_MODELS = require("../../models/user_role.models");
class USER_ROLE_CONTROLLER {
  /************************************
   * GET SINGLE USER ROLE FROM MODEL
   ************************************/
  static all_user_role = async (req, res) => {
    USER_ROLE_MODELS.all_user_role_model((err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "failed to retreive user role" });
      }
      res.status(200).json(data);
    });
  };
  /*************************************
   * GET SINGLE USER ROLE FROM MODEL
   *************************************/
  static single_user_role = async (req, res) => {
    const { id } = req.params;
    USER_ROLE_MODELS.single_user_role_model(id, (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "failed to retreive single user role" });
      }
      res.status(200).json(data);
    });
  };
  /************************************
   * GET SINGLE USER ROLE FROM MODEL
   ************************************/
  static create_user_role = async (req, res) => {
    const data = req.body;
    USER_ROLE_MODELS.create_user_role_model(data, (err, results) => {
      if (err) {
        return res.status(500).json({ message: "failed to create user role" });
      }
      res.status(201).json({
        message: "user role create successfully",
        id: results.insertId,
      });
    });
  };
  /*************************************
   * GET SINGLE USER ROLE FROM MODEL
   *************************************/
  static update_user_role = async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    USER_ROLE_MODELS.update_user_role_model(id, data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "failed to update user role" });
      }
      if (results.effectedRow === 0) {
        return res.status(404).json({ message: "user role not found" });
      }
      res.status(200).json({ message: "user role update successfully" });
    });
  };
  /**************************************
   * GET SINGLE USER ROLE FROM MODEL
   *************************************/
  static delete_user_role = async (req, res) => {
    const { id } = req.params;
    USER_ROLE_MODELS.delete_user_role_model(id, (err, results) => {
      if (err) {
        return res.status(500).json({ message: "failed to delete user role" });
      }
      if (results.effectedRow === 0) {
        return res.status(404).json({ message: "user role not found" });
      }
      res.status(200).json({ message: "user role delete successfully" });
    });
  };
}
module.exports = USER_ROLE_CONTROLLER;
