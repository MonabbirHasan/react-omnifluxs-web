const db = require("../config/db");
class CONNECTED_DEVICE_MODEL {
  /********************************
   * ALL CONNECTED DEVICE FROM DB
   ********************************/
  static all_connected_device_models = (callback) => {
    const sql = "SELECT * FROM connected_device";
    db.query(sql, callback);
  };
  /************************************
   * SINGLE CONNECTED DEVICE FROM DB
   ************************************/
  static single_connected_device_models = (id, callback) => {
    const sql = "SELECT * FROM connected_device WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /*************************************
   * CREATE CONNECTED DEVICE FROM DB
   *************************************/
  static create_connected_device_models = (data, callback) => {
    const sql = "INSERT INTO connected_device SET?";
    db.query(sql, data, callback);
  };
  /************************************
   * UPDATE CONNECTED DEVICE FROM DB
   ************************************/
  static update_connected_device_models = (id, data, callback) => {
    const sql = "UPDATE connected_device SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /************************************
   * DELETE CONNECTED DEVICE FROM DB
   ************************************/
  static delete_connected_device_models = (id, callback) => {
    const sql = "DELETE FROM connected_device WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = CONNECTED_DEVICE_MODEL;
