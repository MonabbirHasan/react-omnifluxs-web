const db = require("../config/db");
class MESSAGES_MODELS {
  /************************
   * ALL MESSAGE FROM DB
   ************************/
  static all_message_modals = (callback) => {
    const sql = "SELECT * FROM messages";
    db.query(sql, callback);
  };
  /************************
   * SINGLE MESSAGE FROM DB
   ************************/
  static single_message_modals = (id, callback) => {
    const sql = "SELECT * FROM messages WHERE id=?";
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
   * CREATE MESSAGE FROM DB
   ************************/
  static create_message_modals = (data, callback) => {
    const sql = "INSERT INTO messages SET?";
    db.query(sql, data, callback);
  };
  /************************
   * UPDATE MESSAGE FROM DB
   ************************/
  static update_message_modals = (id, data, callback) => {
    const sql = "UPDATE messages SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /************************
   * DELETE MESSAGE FROM DB
   ************************/
  static delete_message_modals = (id, callback) => {
    const sql = "DELETE FROM messages WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = MESSAGES_MODELS;
