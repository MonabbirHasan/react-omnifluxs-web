const db = require("../config/db");
class ADS_MODELS {
  /******************
   * ALL ADS MODAL
   ******************/
  static all_ads_model = (callback) => {
    const sql = "SELECT * FROM user_ads";
    db.query(sql, callback);
  };
  /******************
   * SINGLE ADS MODAL
   ******************/
  static single_ads_model = (id, callback) => {
    const sql = "SELECT * FROM user_ads WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const ads = results[0];
        callback(null, ads);
      }
    });
  };
  /******************
   * CREATE ADS MODAL
   ******************/
  static create_ads_model = (data, callback) => {
    const sql = "INSERT INTO user_ads SET?";
    db.query(sql, data, callback);
  };
  /******************
   * UPDATE ADS MODAL
   ******************/
  static update_ads_model = (id, data, callback) => {
    const sql = "UPDATE user_ads SET ? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /******************
   * DELETE ADS MODAL
   ******************/
  static delete_ads_model = (id, callback) => {
    const sql = "DELETE FROM user_ads WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = ADS_MODELS;
