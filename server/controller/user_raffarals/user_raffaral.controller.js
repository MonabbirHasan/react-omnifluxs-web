const USER_RAFFARAL_MODELS = require("../../models/user_raffarals.models");
class USER_RAFFARAL_CONTROLLER {
  /**************************************
   *ALL USER RAFFARAL FROM DB MODELS
   **************************************/
  static all_user_raffaral = async (req, res) => {
    try {
      await USER_RAFFARAL_MODELS.all_user_raffaral_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to retrieve user raffaral" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   *SINGLE USER RAFFARAL FROM DB MODELS
   **************************************/
  static single_user_raffaral = async (req, res) => {
    try {
      const { id } = req.params;
      await USER_RAFFARAL_MODELS.single_user_raffaral_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to retrieve single user raffaral" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   *CREATE USER RAFFARAL FROM DB MODELS
   **************************************/
  static create_user_raffaral = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await USER_RAFFARAL_MODELS.create_user_raffaral_model(
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create user raffaral" });
          }
          res.status(201).json({
            message: "user raffaral create successfully",
            id: results.insertId,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   *UPDATE USER RAFFARAL FROM DB MODELS
   **************************************/
  static update_user_raffaral = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await USER_RAFFARAL_MODELS.update_user_raffaral_model(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to retrieve user raffaral" });
          }
          if (results.effectedRow === 0) {
            return res.status(404).json({ message: "user raffaral not found" });
          }
          res
            .status(200)
            .json({ message: "user raffaral is update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   *DELETE USER RAFFARAL FROM DB MODELS
   **************************************/
  static delete_user_raffaral = async (req, res) => {
    try {
      const { id } = req.params;
      await USER_RAFFARAL_MODELS.delete_user_raffaral_model(
        id,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to delete user raffaral" });
          }
          if (results.effectedRow === 0) {
            return res.status(404).json({ message: "user raffaral not found" });
          }
          res
            .status(200)
            .json({ message: "user raffaral is delete successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = USER_RAFFARAL_CONTROLLER;
