// Import  MySQL connection
const db = require("../config/db");
class UserModels {
  /*---------all users model------------*/
  static async allUsersmodel(callback) {
    const sql = "SELECT * FROM users";
    db.query(sql, callback);
  }
  /*---------single users model------------*/
  static async singleusermodel(id, callback) {
    const sql = "SELECT * FROM users WHERE id = ?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const user = results[0];
        callback(null, user);
      }
    });
  }
  /*---------create users model------------*/
  static createusermodel(userData, callback) {
    const sql = "INSERT INTO users SET ?";
    db.query(sql, userData, callback);
  }
  /*---------update single users model------------*/
  static updateuser(id, userData, callback) {
    const sql = "UPDATE users SET ? WHERE id = ?";
    db.query(sql, [userData, id], callback);
  }
  /*---------delete single users model------------*/
  static deleteuser(id, callback) {
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [id], callback);
  }
}

module.exports = UserModels;
