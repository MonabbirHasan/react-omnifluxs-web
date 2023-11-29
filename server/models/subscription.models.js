const db = require("../config/db");

class SUBSCRIPTION_MODALS {
  /*****************************
   * ALL SUBSCRIPTION MODALS
   *****************************/
  static all_subscription_model = (callback) => {
    const sql = "SELECT * FROM subscriptions";
    db.query(sql, callback);
  };
  /*****************************
   * SINGLE SUBSCRIPTION MODALS
   *****************************/
  static single_subscription_model = (id, callback) => {
    const sql = "SELECT * FROM subscriptions WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const subscription = results[0];
        callback(null, subscription);
      }
    });
  };
  /*****************************
   * CREATE SUBSCRIPTION MODALS
   *****************************/
  static create_subscription_model = (data, callback) => {
    const sql = "INSERT INTO subscriptions SET?";
    db.query(sql, data, callback);
  };
  /*****************************
   * UPDATE SUBSCRIPTION MODALS
   *****************************/
  static update_subscription_model = (id, data, callback) => {
    const sql = "UPDATE subscriptions SET ? WHERE id = ?";
    db.query(sql, [data, id], callback);
  };
  /*****************************
   * DELETE SUBSCRIPTION MODALS
   *****************************/
  static delete_subscription_model = (id, callback) => {
    const sql = "DELETE FROM subscriptions WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = SUBSCRIPTION_MODALS;
