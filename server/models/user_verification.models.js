const db = require("../config/db");
class USER_VERFICATION_MODEL {
  /****************************
   *ALL VERIFED USER FROM DB
   ****************************/
  static all_user_verification_model = (callback) => {
    const sql = "SELECT * FROM UserVerification";
    db.query(sql, callback);
  };
  /****************************
   *SINGLE VERIFED USER FROM DB
   ****************************/
  static single_user_verification_model = (id, callback) => {
    const sql = "SELECT * FROM UserVerification WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /****************************
   *CREATE VERIFED USER FROM DB
   ****************************/
  static create_user_verification_model = (data, callback) => {
    const sql = "INSERT INTO UserVerification SET?";
    db.query(sql, data, callback);
  };
  /****************************
   *UPDATE VERIFED USER FROM DB
   ****************************/
  static update_user_verification_model = (id, data, callback) => {
    const sql = "UPDATE UserVerification SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /****************************
   *DELETE VERIFED USER FROM DB
   ****************************/
  static delete_user_verification_model = (id, callback) => {
    const sql = "DELETE FROM UserVerification WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = USER_VERFICATION_MODEL;
