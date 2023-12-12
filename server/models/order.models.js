const db = require("../config/db");
class ORDERS_MODEL {
  /*************************
   * ALL ORDERS FROM DB
   *************************/
  static all_orders_model = (callback) => {
    const sql = "SELECT * FROM orders";
    db.query(sql, callback);
  };
  /*************************
   * SINGLE ORDERS FROM DB
   *************************/
  static single_orders_model = (id, callback) => {
    const sql = "SELECT * FROM orders WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /*************************
   * CREATE ORDERS FROM DB
   *************************/
  static create_orders_model = (data, callback) => {
    const sql = "INSERT INTO orders SET?";
    db.query(sql, data, callback);
  };
  /*************************
   * UPDATE ORDERS FROM DB
   *************************/
  static update_orders_model = (id, data, callback) => {
    const sql = "UPDATE orders SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /*************************
   * DELETE ORDERS FROM DB
   *************************/
  static delete_orders_model = (id, callback) => {
    const sql = "DELETE FROM orders WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = ORDERS_MODEL;
