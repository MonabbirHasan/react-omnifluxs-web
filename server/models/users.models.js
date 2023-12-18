// Import  MySQL connection
const db = require("../config/db");
class UserModels {
  /*---------ALL USER MODAL------------*/
  static async allUsersmodel(callback) {
    const sql = "SELECT * FROM users";
    db.query(sql, callback);
  }
  /*---------GET USER BY USERNAME MODAL------------*/
  static getUserByUsername(username, password, callback) {
    const sql = "SELECT * FROM users WHERE username = ? AND password=?";
    db.query(sql, [username, password], callback);
  }
  /*---------SINGLE USER MODAL------------*/
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
  /*---------CREATE USER MODAL------------*/
  static createusermodel(userData, callback) {
    const sql = "INSERT INTO users SET ?";
    db.query(sql, userData, callback);
  }
  /*---------UPDATE USER MODEL------------*/
  static updateuser(id, userData, callback) {
    const sql = "UPDATE users SET ? WHERE id = ?";
    db.query(sql, [userData, id], callback);
  }
  /*---------DELETE USER MODAL------------*/
  static deleteuser(id, callback) {
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [id], callback);
  }
}

module.exports = UserModels;
