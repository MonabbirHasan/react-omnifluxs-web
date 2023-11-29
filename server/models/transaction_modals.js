const db = require("../config/db");
class TRANSECTIONS_MODALS {
  /**********************************
   * ALL TRANSECTION MODALS
   *********************************/
  static all_transection_modal = (callback) => {
    const sql = "SELECT * FROM user_transactions";
    db.query(sql, callback);
  };
  /**********************************
   * SINGLE TRANSECTION MODALS
   *********************************/
  static single_transection_modal = (id, callback) => {
    const sql = "SELECT * FROM user_transactions WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const user_transaction = results[0];
        callback(null, user_transaction);
      }
    });
  };
  /**********************************
   * CREATE TRANSECTION MODALS
   *********************************/
  static create_transection_modal = (data, callback) => {
    const sql = "INSERT INTO user_transactions SET ?";
    db.query(sql, data, callback);
  };
  /**********************************
   * UPDATE TRANSECTION MODALS
   *********************************/
  static update_transection_modal = (id, data, callback) => {
    const sql = "UPDATE user_transactions SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /**********************************
   * DELETE TRANSECTION MODALS
   *********************************/
  static delete_transection_modal = (id, callback) => {
    const sql = "DELETE FROM user_transactions WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = TRANSECTIONS_MODALS;
