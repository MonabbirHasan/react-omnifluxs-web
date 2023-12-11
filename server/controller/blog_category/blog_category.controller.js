const BLOG_CATEGORY_MODEL = require("../../models/blog_category.models");
class BLOG_CATEGORY_CONTROLLER {
  /*******************************
   *ALL BLOG CATEGORY FROM MODEL
   *******************************/
  static all_blog_category = async (req, res) => {
    try {
      BLOG_CATEGORY_MODEL.all_blog_category_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get all blog category" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************************
   *SINGLE BLOG CATEGORY FROM MODEL
   ***********************************/
  static single_blog_category = async (req, res) => {
    try {
      const { id } = req.params;
      BLOG_CATEGORY_MODEL.single_blog_category_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single blog category" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************************
   *CREATE BLOG CATEGORY FROM MODEL
   ***********************************/
  static create_blog_category = async (req, res) => {
    try {
      const data = req.body;
      BLOG_CATEGORY_MODEL.create_blog_category_model(data, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create blog category" });
        }
        res.status(201).json({
          message: "blog category create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************************
   *UPDATE BLOG CATEGORY FROM MODEL
   ***********************************/
  static update_blog_category = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      BLOG_CATEGORY_MODEL.update_blog_category_model(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update blog category" });
          }
          if (results.effectedRow === 0) {
            return res.status(404).json({ message: "blog category not found" });
          }
          res
            .status(200)
            .json({ message: "blog category update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /***********************************
   *DELETE BLOG CATEGORY FROM MODEL
   ***********************************/
  static delete_blog_category = async (req, res) => {
    try {
      const { id } = req.params;
      BLOG_CATEGORY_MODEL.delete_blog_category_model(id, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete blog category" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "blog category not found" });
        }
        res.status(200).json({ message: "blog category delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = BLOG_CATEGORY_CONTROLLER;
