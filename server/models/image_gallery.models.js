const db = require("../config/db");
class IMAGE_GALLERY_MODELS {
  /*****************************
   * ALL IMAGE GALLERY FROM DB
   *****************************/
  static all_image_gallery_models = (callback) => {
    const sql = "SELECT * FROM image_gallery";
    db.query(sql, callback);
  };
  /********************************
   * SINGLE IMAGE GALLERY FROM DB
   ********************************/
  static single_image_gallery_models = (id, callback) => {
    const sql = "SELECT * FROM image_gallery WHERE id=?";
    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = results[0];
        callback(null, msg);
      }
    });
  };
  /*********************************
   * CREATE IMAGE GALLERY FROM DB
   *********************************/
  static create_image_gallery_models = (data, callback) => {
    const sql="INSERT INTO image_gallery SET?";
    db.query(sql,data,callback)
  };
  /***********************************
   * UPDATE IMAGE GALLERY FROM DB
   ***********************************/
  static update_image_gallery_models = (id, data, callback) => {
    const sql="UPDATE image_gallery SET? WHERE id=?";
    db.query(sql,[data,id],callback);
  };
  /*********************************
   * DELETE IMAGE GALLERY FROM DB
   *********************************/
  static delete_image_gallery_models = (id, callback) => {
    const sql="DELETE FROM image_gallery WHERE id=?";
    db.query(sql,[id],callback)
  };
}
module.exports = IMAGE_GALLERY_MODELS;
