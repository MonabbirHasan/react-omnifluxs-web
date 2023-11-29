const UserModels = require("../../models/users.models");
const fs = require("fs");
const path = require('path');
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
   * CREATE USERS FROM DB MODELS
   *************************************/
  static createuser = async (req, res) => {
    try {
      const userData = {
        unique_id: Date.now() + "-" + Math.round(Math.random() * 1e9),
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        image: req.file.originalname,
        user_role: req.body.user_role,
        user_type: req.body.user_type,
        is_verified: req.body.is_verified,
        password: req.body.password,
        is_active: req.body.is_active,
      };
      await UserModels.createusermodel(userData, (err, result) => {
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
      unique_id: Date.now() + "-" + Math.round(Math.random() * 1e9),
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      image: req.file.originalname,
      user_role: req.body.role,
      user_type: req.body.type,
      is_verified: req.body.is_verified,
      password: req.body.password,
      is_active: req.body.is_active,
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
  };
}

module.exports = UserController;
