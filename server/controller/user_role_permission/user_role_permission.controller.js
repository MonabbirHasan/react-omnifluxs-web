const USER_ROLE_PERMISSION_MODEL = require("../../models/user_role_permission.models");
class USER_ROLE_PERMISSION_CONTROLLER {
  /*****************************************
   * ALL USER ROLE AND PERMISSION FROM MODEL
   *****************************************/
  static all_user_role_permission = async (req, res) => {
    try {
      USER_ROLE_PERMISSION_MODEL.all_user_role_permission_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get user role permission" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************************
   * ALL USER ROLE AND PERMISSION FROM MODEL
   *****************************************/
  static single_user_role_permission = async (req, res) => {
    try {
      const { id } = req.params;
      USER_ROLE_PERMISSION_MODEL.single_user_role_permission_model(
        id,
        (err, data) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to get single user role permission" });
          }
          res.status(200).json(data);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************************
   * CREATE USER ROLE AND PERMISSION FROM MODEL
   *****************************************/
  static create_user_role_permission = async (req, res) => {
    try {
      const data = req.body;
      USER_ROLE_PERMISSION_MODEL.create_user_role_permission_model(
        data,
        (err, results) => {
          if (err) {
            console.log(err)
            return res
              .status(500)
              .json({ message: "failed to create user role permission" });
          }
          res.status(201).json({
            message: "user role permission create successfully",
            id: results.insertId,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************************
   * UPDATE USER ROLE AND PERMISSION FROM MODEL
   *****************************************/
  static update_user_role_permission = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      USER_ROLE_PERMISSION_MODEL.update_user_role_permission_model(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update user role permission" });
          }
          if (results.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "user role permission not found" });
          }
          res
            .status(200)
            .json({ message: "update user role permission successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************************
   * DELETE USER ROLE AND PERMISSION FROM MODEL
   *****************************************/
  static delete_user_role_permission = async (req, res) => {
    try {
      const { id } = req.params;
      USER_ROLE_PERMISSION_MODEL.delete_user_role_permission_model(
        id,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update user role permission" });
          }
          if (results.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "user role permission not found" });
          }
          res
            .status(200)
            .json({ message: "delete user role permission successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = USER_ROLE_PERMISSION_CONTROLLER;
