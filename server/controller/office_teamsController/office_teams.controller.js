const OFFICE_TEAMS_MODALS = require("../../models/office_teams.models");

class OFFICE_TEAM_CONTROLLER {
  /**************************************
   *ALL OFFICE TEAMS FROM DB MODELS
   **************************************/
  static all_office_teams = async (req, res) => {
    try {
      await OFFICE_TEAMS_MODALS.all_office_team_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to retrieve office teams" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   *SINGLE OFFICE TEAMS FROM DB MODELS
   **************************************/
  static single_office_teams = async (req, res) => {
    try {
      const { id } = req.params;
      await OFFICE_TEAMS_MODALS.single_office_team_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to retrieve single office team" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   *CREATE OFFICE TEAMS FROM DB MODELS
   **************************************/
  static create_office_teams = async (req, res) => {
    try {
      const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        designation: req.body.designation,
        image: req.file.originalname,
        team_role: req.body.team_role,
        team_type: req.body.team_type,
        joing_date: req.body.joing_date,
        is_active: req.body.is_active,
      };
      await OFFICE_TEAMS_MODALS.create_office_team_model(
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create office teams" });
          }
          res.status(201).json({
            message: "office teams create successfully",
            id: results.insertId,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   *UPDATE OFFICE TEAMS FROM DB MODELS
   **************************************/
  static update_office_teams = async (req, res) => {
    try {
      const { id } = req.params;
      const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        designation: req.body.designation,
        image: req.file.originalname,
        team_role: req.body.team_role,
        team_type: req.body.team_type,
        joing_date: req.body.joing_date,
        is_active: req.body.is_active,
      };
      await OFFICE_TEAMS_MODALS.update_office_team_model(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update office teams" });
          }
          if (results.effectedRow === 0) {
            return res.status(404).json({ message: "office teams not found" });
          }
          res.status(200).json({ message: "office teams update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   *DELETE OFFICE TEAMS FROM DB MODELS
   **************************************/
  static delete_office_teams = async (req, res) => {
    try {
      const { id } = req.params;
      await OFFICE_TEAMS_MODALS.delete_office_team_model(id, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete office teams" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "office teams not found" });
        }
        res.status(200).json({ message: "office teams delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = OFFICE_TEAM_CONTROLLER;
