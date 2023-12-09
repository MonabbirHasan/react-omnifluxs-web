const IMAGE_GALLERY_MODELS = require("../../models/image_gallery.models");
class IMAGE_GALLERY_CONTROLLER {
  /*********************************
   * ALL IMAGE GALLERY FROM MODLES
   *********************************/
  static all_image_gallery = async (req, res) => {
    try {
      IMAGE_GALLERY_MODELS.all_image_gallery_models((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get all image gallery" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*********************************
   * ALL IMAGE GALLERY FROM MODLES
   *********************************/
  static single_image_gallery = async (req, res) => {
    try {
      const { id } = req.params;
      IMAGE_GALLERY_MODELS.single_image_gallery_models(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single image gallery" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*********************************
   * ALL IMAGE GALLERY FROM MODLES
   *********************************/
  static create_image_gallery = async (req, res) => {
    try {
      const data = req.body;
      IMAGE_GALLERY_MODELS.create_image_gallery_models(data, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create image gallery" });
        }
        res.status(201).json({
          message: "image gallery create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**********************************
   * ALL IMAGE GALLERY FROM MODLES
   **********************************/
  static update_image_gallery = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      IMAGE_GALLERY_MODELS.update_image_gallery_models(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update image gallery" });
          }
          if (results.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "image gallery not found!" });
          }
          res
            .status(200)
            .json({ message: "image gallery update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   * ALL IMAGE GALLERY FROM MODLES
   ************************************/
  static delete_image_gallery = async (req, res) => {
    try {
      const { id } = req.params;
      IMAGE_GALLERY_MODELS.delete_image_gallery_models(id, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete image gallery" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "image gallery not found!" });
        }
        res.status(200).json({ message: "image gallery delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = IMAGE_GALLERY_CONTROLLER;
