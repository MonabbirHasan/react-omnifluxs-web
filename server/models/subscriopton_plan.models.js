const db = require("../config/db");
class SUBSCRIPTION_PLAN_MODALS {
  /**************************************
   * ALL SUBSCRIPTION PLAN MODALS
   **************************************/
  static all_subscription_plan_modal = (callback) => {
    const sql = "SELECT * FROM subscription_plan";
    db.query(sql, callback);
  };
  /**************************************
   * SINGLE SUBSCRIPTION PLAN MODALS
   **************************************/
  static single_subscription_plan_modal = (id, callback) => {
    const sql = "SELECT * FROM subscription_plan WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const subscription_plans = results[0];
        callback(null, subscription_plans);
      }
    });
  };
  /**************************************
   * CREATE SUBSCRIPTION PLAN MODALS
   **************************************/
  static create_subscription_plan_modal = (data, callback) => {
    const sql = "INSERT INTO subscription_plan SET ?";
    db.query(sql, data, callback);
  };
  /**************************************
   * UPDATE SUBSCRIPTION PLAN MODALS
   **************************************/
  static update_subscription_plan_modal = (id, data, callback) => {
    const sql = "UPDATE subscription_plan SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /**************************************
   * DELETE SUBSCRIPTION PLAN MODALS
   **************************************/
  static delete_subscription_plan_modal = (id, callback) => {
    const sql = "DELETE FROM subscription_plan WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = SUBSCRIPTION_PLAN_MODALS;
