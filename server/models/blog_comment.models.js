const db = require("../config/db");
class BLOG_COMMENT_MODEL {
  /******************************
   *ALL BLOG COMMENT FROM DB
   ******************************/
  static all_blog_comment_model = (callback) => {
    const sql = "SELECT * FROM blog_comment";
    db.query(sql, callback);
  };
  /******************************
   *SINGLE BLOG COMMENT FROM DB
   ******************************/
  static single_blog_comment_model = (id, callback) => {
    const sql = "SELECT * FROM blog_comment WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /******************************
   *CREATE BLOG COMMENT FROM DB
   ******************************/
  static create_blog_comment_model = (data, callback) => {
    const sql = "INSERT INTO blog_comment SET?";
    db.query(sql, data, callback);
  };
  /******************************
   *UPDATE BLOG COMMENT FROM DB
   ******************************/
  static update_blog_comment_model = (id, data, callback) => {
    const sql = "UPDATE blog_comment SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /******************************
   *DELETE BLOG COMMENT FROM DB
   ******************************/
  static delete_blog_comment_model = (id, callback) => {
    const sql = "DELETE FROM blog_comment WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = BLOG_COMMENT_MODEL;
