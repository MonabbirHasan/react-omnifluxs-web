const db = require("../config/db");
class USER_ROLE_PERMISSION_MODEL {
  /*****************************************
   * ALL USER ROLE AND PERMISSION FROM DB
   *****************************************/
  static all_user_role_permission_model = (callback) => {
    const sql = "SELECT * FROM user_role_permissions";
    db.query(sql, callback);
  };
  /*****************************************
   * SINGLE USER ROLE AND PERMISSION FROM DB
   *****************************************/
  static single_user_role_permission_model = (id, callback) => {
    const sql = "SELECT * FROM user_role_permissions WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const urp = results[0];
        callback(null, urp);
      }
    });
  };
  /*****************************************
   * CREATE USER ROLE AND PERMISSION FROM DB
   *****************************************/
  static create_user_role_permission_model = (data, callback) => {
    const sql = "INSERT INTO user_role_permissions SET?";
    db.query(sql, data, callback);
  };
  /*****************************************
   * UPDATE USER ROLE AND PERMISSION FROM DB
   *****************************************/
  static update_user_role_permission_model = (id, data, callback) => {
    const sql = "UPDATE user_role_permissions SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /*****************************************
   * DELETE USER ROLE AND PERMISSION FROM DB
   *****************************************/
  static delete_user_role_permission_model = (id, callback) => {
    const sql = "DELETE FROM user_role_permissions WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = USER_ROLE_PERMISSION_MODEL;
