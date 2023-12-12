const CLIENTS_MODEL = require("../../models/clients.models");
class CLIENTS_CONTROLLER {
  /***********************
   *ALL CLIENTS FROM DB
   ***********************/
  static all_clients = async (req, res) => {
    try {
      CLIENTS_MODEL.all_clients_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to get all clients" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************
   *SINGLE CLIENTS FROM DB
   ***********************/
  static single_clients = async (req, res) => {
    try {
      const { id } = req.params;
      CLIENTS_MODEL.single_clients_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single clients" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************
   *CREATE CLIENTS FROM DB
   ***********************/
  static create_clients = async (req, res) => {
    try {
      const data = {
        client_name: req.body.client_name,
        contact_person: req.body.contact_person,
        image: req.file.originalname,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        is_active: req.body.is_active,
      };
      CLIENTS_MODEL.create_clients_model(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create clients" });
        }
        res.status(201).json({
          message: "clients create sucessfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************
   *UPDATE CLIENTS FROM DB
   ***********************/
  static update_clients = async (req, res) => {
    try {
      const { id } = req.params;
      const data = {
        client_name: req.body.client_name,
        contact_person: req.body.contact_person,
        image: req.file.originalname,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        is_active: req.body.is_active,
      };
      CLIENTS_MODEL.update_clients_model(id, data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to update clients" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "clients no found" });
        }
        res.status(200).json({ message: "clients update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************
   *DELETE CLIENTS FROM DB
   ***********************/
  static delete_clients = async (req, res) => {
    try {
      const { id } = req.params;
      CLIENTS_MODEL.delete_clients_model(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to delete clients" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "clients no found" });
        }
        res.status(200).json({ message: "clients delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = CLIENTS_CONTROLLER;
