const db = require("../config/db");
class COURSE_MODELS {
  /**********************
   * ALL COURSES FROM DB
   ***********************/
  static all_course_model = async (callback) => {
    const sql = "SELECT * FROM courses";
    db.query(sql, callback);
  };
  /**************************
   * SINGLE COURSES FROM DB
   **************************/
  static single_course_model = async (id, callback) => {
    const sql = "SELECT * FROM courses WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /**************************
   * CREATE COURSES FROM DB
   **************************/
  static create_course_model = async (data, callback) => {
    const sql = "INSERT INTO courses SET?";
    db.query(sql, data, callback);
  };
  /**************************
   * UPDATE COURSES FROM DB
   **************************/
  static update_course_model = async (id, data, callback) => {
    const sql = "UPDATE courses SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /**************************
   * DELETE COURSES FROM DB
   **************************/
  static delete_course_model = async (id, callback) => {
    const sql = "DELETE FROM courses WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = COURSE_MODELS;
