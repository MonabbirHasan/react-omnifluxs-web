const db = require("../config/db");
class FOLDER_MODEL {
  /**********************
   * ALL FOLDER FROM DB
   **********************/
  static all_folder_models = (callback) => {
    const sql = "SELECT * FROM folders";
    db.query(sql, callback);
  };
  /**********************
   * SINGLE FOLDER FROM DB
   **********************/
  static single_folder_models = (id, callback) => {
    const sql = "SELECT * FROM folders WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const folders = results[0];
        callback(null, folders);
      }
    });
  };
  /**********************
   * CREATE FOLDER FROM DB
   **********************/
  static create_folder_models = (data, callback) => {
    const sql = "INSERT INTO folders SET?";
    db.query(sql, data, callback);
  };
  /**********************
   * UPDATE FOLDER FROM DB
   **********************/
  static update_folder_models = (id, data, callback) => {
    const sql = "UPDATE folders SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /**********************
   * DELETE FOLDER FROM DB
   **********************/
  static delete_folder_models = (id, callback) => {
    const sql = "DELETE FROM folders WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = FOLDER_MODEL;
