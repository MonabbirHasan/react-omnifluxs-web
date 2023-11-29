const db = require("../config/db");
class USER_RAFFARAL_MODELS {
  /******************************
   *ALL USER RAFFARAL MODELS
   ******************************/
  static all_user_raffaral_model = (callback) => {
    const sql = "SELECT * FROM user_raffaral";
    db.query(sql, callback);
  };
  /******************************
   *ALL USER RAFFARAL MODELS
   ******************************/
  static single_user_raffaral_model = (id, callback) => {
    const sql = "SELECT * FROM user_raffaral WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const raffarals = results[0];
        callback(null, raffarals);
      }
    });
  };
  /******************************
   *ALL USER RAFFARAL MODELS
   ******************************/
  static create_user_raffaral_model = (data, callback) => {
    const sql = "INSERT INTO user_raffaral SET?";
    db.query(sql, data, callback);
  };
  /******************************
   *ALL USER RAFFARAL MODELS
   ******************************/
  static update_user_raffaral_model = (id, data, callback) => {
    const sql = "UPDATE user_raffaral SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /******************************
   *ALL USER RAFFARAL MODELS
   ******************************/
  static delete_user_raffaral_model = (id, callback) => {
    const sql = "DELETE FROM user_raffaral WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = USER_RAFFARAL_MODELS;
