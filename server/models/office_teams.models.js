const db = require("../config/db");
class OFFICE_TEAMS_MODALS {
  /***************************
   *ALL OFFICE TEAMS FROM DB
   ***************************/
  static all_office_team_model = (callback) => {
    const sql = "SELECT * FROM office_teams";
    db.query(sql, callback);
  };
  /***************************
   *SINGLE OFFICE TEAMS FROM DB
   ***************************/
  static single_office_team_model = (id, callback) => {
    const sql = "SELECT * FROM office_teams WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const office_teams = results[0];
        callback(null, office_teams);
      }
    });
  };
  /***************************
   *CREATE OFFICE TEAMS FROM DB
   ***************************/
  static create_office_team_model = (data, callback) => {
    const sql = "INSERT INTO office_teams SET ?";
    db.query(sql, data, callback);
  };
  /***************************
   *UPDATE OFFICE TEAMS FROM DB
   ***************************/
  static update_office_team_model = (id, data, callback) => {
    const sql = "UPDATE office_teams SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /***************************
   *DELETE OFFICE TEAMS FROM DB
   ***************************/
  static delete_office_team_model = (id, callback) => {
    const sql = "DELETE FROM office_teams WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = OFFICE_TEAMS_MODALS;
