const db = require("../config/db");
class USER_PERMISSION_MODEL {
  /***********************************
   * GET ALL USER PERMISSION FROM DB
   ***********************************/
  static all_user_permissions_model = (callback) => {
    const sql = "SELECT * FROM permissions";
    db.query(sql, callback);
  };
  /***********************************
   * GET SINGLE USER PERMISSION FROM DB
   ***********************************/
  static single_user_permissions_model = (id, callback) => {
    const sql = "SELECT * FROM permissions WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const user_permission = results[0];
        callback(null, user_permission);
      }
    });
  };
  /***********************************
   * CREATE USER PERMISSION FROM DB
   ***********************************/
  static create_user_permissions_model = (data, callback) => {
    const sql = "INSERT INTO permissions SET?";
    db.query(sql, data, callback);
  };
  /***********************************
   * UPDATE USER PERMISSION FROM DB
   ***********************************/
  static update_user_permissions_model = (id, data, callback) => {
    const sql = "UPDATE permissions SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /***********************************
   * DELETE USER PERMISSION FROM DB
   ***********************************/
  static delete_user_permissions_model = (id, callback) => {
    const sql = "DELETE FROM permissions WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = USER_PERMISSION_MODEL;
