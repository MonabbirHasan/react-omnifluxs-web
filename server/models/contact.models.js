const db = require("../config/db");
class CONTACT_MODELS {
  /***********************
   * ALL CONTACT FROM DB
   ***********************/
  static all_contact_models = (callback) => {
    const sql = "SELECT * FROM contact";
    db.query(sql, callback);
  };
  /***************************
   * SINGLE CONTACT FROM DB
   ***************************/
  static single_contact_models = (id, callback) => {
    const sql = "SELECT * FROM contact WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /***************************
   * CREATE CONTACT FROM DB
   ***************************/
  static create_contact_models = (data, callback) => {
    const sql = "INSERT INTO contact SET?";
    db.query(sql, data, callback);
  };
  /***************************
   * UPDATE CONTACT FROM DB
   ***************************/
  static update_contact_models = (id, data, callback) => {
    const sql = "UPDATE contact SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /***************************
   * DELETE CONTACT FROM DB
   ***************************/
  static delete_contact_models = (id, callback) => {
    const sql = "DELETE FROM contact WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = CONTACT_MODELS;
