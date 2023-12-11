const db = require("../config/db");
class BLOG_CATEGORY_MODEL {
  /*******************************
   *ALL BLOG CATEGORY FROM DB
   *******************************/
  static all_blog_category_model = (callback) => {
    try {
      const sql = "SELECT * FROM blog_category";
      db.query(sql, callback);
    } catch (error) {
      console.error(error);
    }
  };
  /*******************************
   *SINGLE BLOG CATEGORY FROM DB
   *******************************/
  static single_blog_category_model = (id, callback) => {
    try {
      const sql = "SELECT * FROM blog_category WHERE id=?";
      db.query(sql, [id], (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          const msg = results[0];
          callback(null, msg);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*******************************
   *CREATE BLOG CATEGORY FROM DB
   *******************************/
  static create_blog_category_model = (data, callback) => {
    try {
      const sql = "INSERT INTO blog_category SET?";
      db.query(sql, data, callback);
    } catch (error) {
      console.error(error);
    }
  };
  /*******************************
   *UPDATE BLOG CATEGORY FROM DB
   *******************************/
  static update_blog_category_model = (id, data, callback) => {
    try {
      const sql = "UPDATE blog_category SET? WHERE id=?";
      db.query(sql, [data, id], callback);
    } catch (error) {
      console.error(error);
    }
  };
  /*******************************
   *DELETE BLOG CATEGORY FROM DB
   *******************************/
  static delete_blog_category_model = (id, callback) => {
    try {
      const sql = "DELETE FROM blog_category WHERE id=?";
      db.query(sql, [id], callback);
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = BLOG_CATEGORY_MODEL;
