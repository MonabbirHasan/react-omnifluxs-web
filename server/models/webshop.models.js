const db = require("../config/db");
class WEBSHOP_MODELS {
  /***************************
   * ALL WEBSITE FROM DB
   ***************************/
  static all_webshop_models = (callback) => {
    const sql = "SELECT * FROM webshop";
    db.query(sql, callback);
  };
  /***************************
   * SINGLE WEBSITE FROM DB
   ***************************/
  static single_webshop_models = (id, callback) => {
    const sql = "SELECT * FROM webshop WHERE id=?";
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
   * CREATE WEBSITE FROM DB
   ***************************/
  static create_webshop_models = (data, callback) => {
    const sql = "INSERT INTO webshop SET?";
    db.query(sql, data, callback);
  };
  /***************************
   * UPDATE WEBSITE FROM DB
   ***************************/
  static update_webshop_models = (id, data, callback) => {
    const sql = "UPDATE webshop SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /***************************
   * DELETE WEBSITE FROM DB
   ***************************/
  static delete_webshop_models = (id, callback) => {
    const sql = "DELETE FROM webshop WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = WEBSHOP_MODELS;
