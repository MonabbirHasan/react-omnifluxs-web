const db = require("../config/db");
class USER_ROLE_MODELS {
  /******************************
   * GET ALL USER ROLE FROM DB
   ******************************/
  static all_user_role_model = (callback) => {
    const sql = "SELECT * FROM user_roles";
    db.query(sql, callback);
  };
  /*********************************
   * GET SINGLE USER ROLE FROM DB
   ********************************/
  static single_user_role_model = (id, callback) => {
    const sql = "SELECT * FROM user_roles WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const user_role = results[0];
        callback(null, user_role);
      }
    });
  };
  /******************************
   * CREATE USER ROLE FROM DB
   ******************************/
  static create_user_role_model = (data, callback) => {
    const sql = "INSERT INTO user_roles SET?";
    db.query(sql, data, callback);
  };
  /******************************
   * UPDATE USER ROLE FROM DB
   ******************************/
  static update_user_role_model = (id, data, callback) => {
    const sql = "UPDATE user_roles SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /******************************
   * DELETE USER ROLE FROM DB
   ******************************/
  static delete_user_role_model = (id, callback) => {
    const sql = "DELETE FROM user_roles WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = USER_ROLE_MODELS;
