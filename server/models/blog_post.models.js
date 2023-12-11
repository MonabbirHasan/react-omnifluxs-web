const db = require("../config/db");
class BLOG_POST_MODEL {
  /************************
   *ALL BLOG POST FROM DB
   ************************/
  static all_blog_post_model = (callback) => {
    const sql = "SELECT * FROM blog_post";
    db.query(sql, callback);
  };
  /************************
   *SINGLE BLOG POST FROM DB
   ************************/
  static single_blog_post_model = (id, callback) => {
    const sql = "SELECT * FROM blog_post WHERE id=?";
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
   *CREATE BLOG POST FROM DB
   ************************/
  static create_blog_post_model = (data, callback) => {
    const sql = "INSERT INTO blog_post SET?";
    db.query(sql, data, callback);
  };
  /************************
   *UPDATE BLOG POST FROM DB
   ************************/
  static update_blog_post_model = (id, data, callback) => {
    const sql = "UPDATE blog_post SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /************************
   *DELETE BLOG POST FROM DB
   ************************/
  static delete_blog_post_model = (id, callback) => {
    const sql = "DELETE FROM blog_post WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = BLOG_POST_MODEL;