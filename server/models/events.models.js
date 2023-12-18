const db = require("../config/db");
class EVENTS_MODEL {
  /***********************
   * ALL EVENTS FROM DB
   ***********************/
  static all_events_model = (callback) => {
    const sql = "SELECT * FROM task";
    db.query(sql, callback);
  };
  /**************************
   * SINGLE EVENTS FROM DB
   **************************/
  static single_events_model = (id, callback) => {
    const sql = "SELECT * FROM task WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /**************************
   * CREATE EVENTS FROM DB
   **************************/
  static create_events_model = (data, callback) => {
    const sql = "INSERT INTO task SET?";
    db.query(sql, data, callback);
  };
  /**************************
   * UPDATE EVENTS FROM DB
   **************************/
  static update_events_model = (id, data, callback) => {
    const sql = "UPDATE task SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /*************************
   * DELETE EVENTS FROM DB
   *************************/
  static delete_events_model = (id, callback) => {
    const sql = "DELETE FROM task WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = EVENTS_MODEL;
