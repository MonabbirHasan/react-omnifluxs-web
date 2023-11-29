const db = require("../config/db");
class EMAILS_MODELS {
  /************************
   *ALL EMAILS FROM DB
   ************************/
  static all_emails_model = (callback) => {
    const sql = "SELECT * FROM emails";
    db.query(sql, callback);
  };
  /************************
   *SINGLE EMAILS FROM DB
   ************************/
  static single_emails_model = (id, callback) => {
    const sql = "SELECT * FROM emails WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const email = results[0];
        callback(null, email);
      }
    });
  };
  /************************
   *CREATE EMAILS FROM DB
   ************************/
  static create_emails_model = (data, callback) => {
    const sql = "INSERT INTO emails SET ?";
    db.query(sql, data, callback);
  };
  /************************
   *UPDATE EMAILS FROM DB
   ************************/
  static update_emails_model = (id, data, callback) => {
    const sql = "UPDATE emails SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /************************
   *DELETE EMAILS FROM DB
   ************************/
  static delete_emails_model = (id, callback) => {
    const sql = "DELETE FROM emails WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = EMAILS_MODELS;
