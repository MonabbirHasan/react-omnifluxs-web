const db = require("../config/db");
class PRODUCT_PIN_REQUEST_MODEL {
  /***********************************
   * ALL PRODUCT PIN REQUEST FROM DB
   ***********************************/
  static all_product_pin_request_model = (callback) => {
    const sql = "SELECT * FROM product_pin_requests";
    db.query(sql, callback);
  };
  /**************************************
   * SINGLE PRODUCT PIN REQUEST FROM DB
   **************************************/
  static single_product_pin_request_model = (id, callback) => {
    const sql = "SELECT * FROM product_pin_requests WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /**************************************
   * CREATE PRODUCT PIN REQUEST FROM DB
   **************************************/
  static create_product_pin_request_model = (data, callback) => {
    const sql = "INSERT INTO product_pin_requests SET?";
    db.query(sql, data, callback);
  };
  /**************************************
   * UPDATE PRODUCT PIN REQUEST FROM DB
   **************************************/
  static update_product_pin_request_model = (id, data, callback) => {
    const sql = "UPDATE product_pin_requests SET? WHERE id=?";
    db.query(sql,[data, id], callback);
  };
  /**************************************
   * DELETE PRODUCT PIN REQUEST FROM DB
   **************************************/
  static delete_product_pin_request_model = (id, callback) => {
    const sql = "DELETE FROM product_pin_requests WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = PRODUCT_PIN_REQUEST_MODEL;
