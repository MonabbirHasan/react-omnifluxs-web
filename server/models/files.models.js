const db = require("../config/db");
class FILES_MODELS {
  /************************
   * ALL FILES FROM DB
   ***********************/
  static all_files_models = (callback) => {
    const sql = "SELECT * FROM files";
    db.query(sql, callback);
  };
  /************************
   * SINGLE FILES FROM DB
   ***********************/
  static single_files_models = (id, callback) => {
    const sql = "SELECT * FROM files WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const files = results[0];
        callback(null, files);
      }
    });
  };
  /************************
   * CREATE FILES FROM DB
   ***********************/
  static create_files_models = (data, callback) => {
    const sql = "INSERT INTO files SET ?";
    db.query(sql, data, callback);
  };
  /************************
   * UPDATE FILES FROM DB
   ***********************/
  static update_files_models = (id, data, callback) => {
    const sql = "UPDATE files SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /************************
   * DELETE FILES FROM DB
   ***********************/
  static delete_files_models = (id, callback) => {
    const sql = "DELETE FROM files WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = FILES_MODELS;
