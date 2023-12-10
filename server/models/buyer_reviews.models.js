const db = require("../config/db");
class BUYER_REVIEW_MODELS {
  /****************************
   * ALL BUYER REVIEW FROM DB
   ****************************/
  static all_buyer_review_model = (callback) => {
    const sql = "SELECT * FROM buyer_reviews";
    db.query(sql, callback);
  };
  /*******************************
   * SINGLE BUYER REVIEW FROM DB
   *******************************/
  static single_buyer_review_model = (id, callback) => {
    const sql = "SELECT * FROM buyer_reviews WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /*******************************
   * CREATE BUYER REVIEW FROM DB
   *******************************/
  static create_buyer_review_model = (data, callback) => {
    const sql = "INSERT INTO buyer_reviews SET?";
    db.query(sql, data, callback);
  };
  /*******************************
   * UPDATE BUYER REVIEW FROM DB
   *******************************/
  static update_buyer_review_model = (id, data, callback) => {
    const sql = "UPDATE buyer_reviews SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /*******************************
   * DELETE BUYER REVIEW FROM DB
   *******************************/
  static delete_buyer_review_model = (id, callback) => {
    const sql = "DELETE FROM buyer_reviews WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = BUYER_REVIEW_MODELS;
