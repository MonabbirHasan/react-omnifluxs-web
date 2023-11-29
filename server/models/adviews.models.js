const db = require("../config/db");
class ADVIEW_MODALS {
  /**************************
   * ALL ADVIEW MODALS
   **************************/
  static all_adview_modal = (callback) => {
    const sql = "SELECT * FROM adviews";
    db.query(sql, callback);
  };
  /**************************
   * SINGLE ADVIEW MODALS
   **************************/
  static single_adview_modal = (id, callback) => {
    const sql = "SELECT * FROM adviews WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const adviews = results[0];
        callback(null, adviews);
      }
    });
  };
  /**************************
   * CREATE ADVIEW MODALS
   **************************/
  static create_adview_modal = (data, callback) => {
    const sql = "INSERT INTO adviews SET ?";
    db.query(sql, data, callback);
  };
  /**************************
   * UPDATE ADVIEW MODALS
   **************************/
  static update_adview_modal = (id, data, callback) => {
    const sql = "UPDATE adviews SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /**************************
   * DELETE ADVIEW MODALS
   **************************/
  static delete_adview_modal = (id, callback) => {
    const sql = "DELETE FROM adviews WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = ADVIEW_MODALS;
