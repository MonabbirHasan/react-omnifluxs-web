const USER_PERMISSION_MODEL = require("../../models/user_permissions.models");
class USER_PERMISSION_CONTROLLER {
  /*****************************************
   * GET ALL USER PERMISSION FROM MODEL
   *****************************************/
  static all_user_permission = (req, res) => {
    USER_PERMISSION_MODEL.all_user_permissions_model((err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "failed to retrieve user permission" });
      }
      res.status(200).json(data);
    });
  };
  /****************************************
   * SINGLE USER PERMISSION FROM DB
   ****************************************/
  static single_user_permission = (req, res) => {
    const { id } = req.params;
    USER_PERMISSION_MODEL.single_user_permissions_model(id, (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "failed to retrieve single user permission" });
      }
      res.status(200).json(data);
    });
  };
  /****************************************
   * CREATE USER PERMISSION FROM DB
   ****************************************/
  static create_user_permission = (req, res) => {
    const data = req.body;
    USER_PERMISSION_MODEL.create_user_permissions_model(
      data,
      (err, results) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json({ message: "failed to retrieve create user permission" });
        }
        res.status(201).json({
          message: "user permission create successfully",
          id: results.insertId,
        });
      }
    );
  };
  /***************************************
   * UPDATE USER PERMISSION FROM DB
   ***************************************/
  static update_user_permission = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    USER_PERMISSION_MODEL.update_user_permissions_model(
      id,
      data,
      (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update user permission" });
        }
        if (results.effectedRow === 0) {
          return res
            .status(500)
            .json({ message: "user permission not found!" });
        }
        res
          .status(200)
          .json({ message: "user permission update successfully" });
      }
    );
  };
  /****************************************
   * DELETE USER PERMISSION FROM DB
   ****************************************/
  static delete_user_permission = (req, res) => {
    const { id } = req.params;
    USER_PERMISSION_MODEL.delete_user_permissions_model(id, (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "failed to delete user permission" });
      }
      if (results.effectedRow === 0) {
        return res.status(500).json({ message: "user permission not found!" });
      }
      res.status(200).json({ message: "user permission delete successfully" });
    });
  };
}
module.exports = USER_PERMISSION_CONTROLLER;
