const db = require("../config/db");
class LIKES_MODEL {
  /************************
   * ALL LIKES FROM DB
   ************************/
  static all_likes_model = (callback) => {
    const sql = "SELECT * FROM likes";
    db.query(sql, callback);
  };
  /************************
   * SINGLE LIKES FROM DB
   ************************/
  static single_likes_model = (id, callback) => {
    const sql = "SELECT * FROM likes WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /************************
   * CREATE LIKES FROM DB
   ************************/
  static create_likes_model = (data, callback) => {
    const sql = "INSERT INTO likes SET?";
    db.query(sql, data, callback);
  };
  /************************
   * UPDATE LIKES FROM DB
   ************************/
  static update_likes_model = (id, data, callback) => {
    const sql = "UPDATE likes SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /************************
   * DELETE LIKES FROM DB
   ************************/
  static delete_likes_model = (id, callback) => {
    const sql = "DELETE FROM likes WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = LIKES_MODEL;
