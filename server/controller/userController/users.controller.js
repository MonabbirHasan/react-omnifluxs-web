const UserModels = require("../../models/users.models");
const fs = require("fs");
const { uuid } = require("uuidv4");
class UserController {
  /*************************************
   * GET ALL USERS FROM DB MODELS
   *************************************/
  static alluser = async (req, res) => {
    await UserModels.allUsersmodel((err, users) => {
      if (err) {
        return res.status(500).json({ error: "Failed to retrieve users" });
      }
      res.status(200).json(users);
    });
  };
  /*************************************
   * GET SINGLE USERS FROM DB MODELS
   *************************************/
  static singleuser = async (req, res) => {
    const { id } = req.params;
    await UserModels.singleusermodel(id, (err, users) => {
      if (err) {
        return res.status(500).json({ error: "Failed to retrieve user" });
      }
      res.status(200).json(users);
    });
  };
  /*************************************
   * GET CREATE USERS FROM DB MODELS
   *************************************/
  static createuser = async (req, res) => {
    try {
      const userData = {
        uniqueid: Date.now() + "-" + Math.round(Math.random() * 1e9),
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        image: req.file.originalname,
        referral_code: req.body.referral_code,
        role: req.body.role,
        type: req.body.type,
        isActivePlan: req.body.isActivePlan,
        balance: req.body.balance,
        status: req.body.status,
      };
      UserModels.createusermodel(userData, (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Failed to create user" });
        }
        res.json({ message: "User created successfully", id: result.insertId });
      });
    } catch (error) {
      console.log(error);
    }
  };
  /*************************************
   * GET UPDATE USERS FROM DB MODELS
   *************************************/
  static updateuser = (req, res) => {
    const { id } = req.params;
    const userData = {
      uniqueid: Date.now() + "-" + Math.round(Math.random() * 1e9),
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      image: req.file.originalname,
      referral_code: req.body.referral_code,
      role: req.body.role,
      type: req.body.type,
      isActivePlan: req.body.isActivePlan,
      balance: req.body.balance,
      status: req.body.status,
    };
    UserModels.updateuser(id, userData, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Failed to update user" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User updated successfully" });
    });
  };
  static deletesuser = async (req, res) => {
    const { id } = req.params;
    UserModels.deleteuser(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete user" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    });
    // await UserModels.singleusermodel(id, (err, users) => {
    //   if (err) {
    //     return res.status(500).json({ error: "Failed to retrieve user" });
    //   }
    //   res.status(200).json(users);

    // });
  };
}

module.exports = UserController;
