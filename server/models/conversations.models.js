const db = require("../config/db");
class CONVERSATIONS_MODELS {
  /******************************
   * ALL CONVERSATIONS FROM DB
   ******************************/
  static all_conversation_model = (callback) => {
    const sql = "SELECT * FROM conversation";
    db.query(sql, callback);
  };
  /**********************************
   * SINGLE CONVERSATIONS FROM DB
   **********************************/
  static single_conversation_model = (id, callback) => {
    const sql = "SELECT * FROM conversation WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const conversations = results[0];
        callback(null, conversations);
      }
    });
  };
  /**********************************
   * CREATE CONVERSATIONS FROM DB
   **********************************/
  static create_conversation_model = (data, callback) => {
    const sql = "INSERT INTO conversation SET?";
    db.query(sql, data, callback);
  };
  /**********************************
   * UPDATE CONVERSATIONS FROM DB
   **********************************/
  static update_conversation_model = (id, data, callback) => {
    const sql = "UPDATE conversation SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /**********************************
   * DELETE CONVERSATIONS FROM DB
   **********************************/
  static delete_conversation_model = (id, callback) => {
    const sql = "DELETE FROM conversation WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = CONVERSATIONS_MODELS;
