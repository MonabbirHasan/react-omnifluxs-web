const db = require("../config/db");

class FUNDS_MODALS {
  /*****************************
   * ALL FUNDS MODALS
   *****************************/
  static all_funds_modal = (callback) => {
    const sql = "SELECT * FROM user_funds";
    db.query(sql, callback);
  };
  /*****************************
   * SINGLE FUNDS MODALS
   *****************************/
  static single_funds_modal = (id, callback) => {
    const sql = "SELECT * FROM user_funds WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const funds = results[0];
        callback(null, funds);
      }
    });
  };
  /*****************************
   * CREATE FUNDS MODALS
   *****************************/
  static create_funds_modal = (data, callback) => {
    const sql = "INSERT INTO user_funds SET ?";
    db.query(sql, data, callback);
  };
  /*****************************
   * UPDATE FUNDS MODALS
   *****************************/
  static update_funds_modal = (id, data, callback) => {
    const sql = "UPDATE user_funds SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /*****************************
   * DELETE FUNDS MODALS
   *****************************/
  static delete_funds_modal = (id, callback) => {
    const sql = "DELETE FROM user_funds WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = FUNDS_MODALS;
