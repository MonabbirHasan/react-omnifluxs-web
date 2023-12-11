const BLOG_COMMENT_MODEL = require("../../models/blog_comment.models");
class BLOG_COMMENT_CONTROLLER {
  /******************************
   *ALL BLOG COMMENT FROM MODEL
   ******************************/
  static all_blog_comment = async (req, res) => {
    try {
      BLOG_COMMENT_MODEL.all_blog_comment_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get all blog comment" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************************
   *SINGLE BLOG COMMENT FROM MODEL
   ***********************************/
  static single_blog_comment = async (req, res) => {
    try {
      const { id } = req.params;
      BLOG_COMMENT_MODEL.single_blog_comment_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single blog cooment" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************************
   *CREATE BLOG COMMENT FROM MODEL
   ***********************************/
  static create_blog_comment = async (req, res) => {
    try {
      const data = req.body;
      BLOG_COMMENT_MODEL.create_blog_comment_model(data, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create blog comment" });
        }
        res.status(201).json({
          message: "blog comment create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************************
   *UPDATE BLOG COMMENT FROM MODEL
   ***********************************/
  static update_blog_comment = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      BLOG_COMMENT_MODEL.update_blog_comment_model(id, data, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update blog comment" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "blog comment not found" });
        }
        res.status(200).json({ message: "blog comment update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /***********************************
   *DELETE BLOG COMMENT FROM MODEL
   ***********************************/
  static delete_blog_comment = async (req, res) => {
    const { id } = req.params;
    BLOG_COMMENT_MODEL.delete_blog_comment_model(id, (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "failed to delete blog comment" });
      }
      if (results.effectedRow === 0) {
        return res.status(404).json({ message: "blog comment not found" });
      }
      res.status(200).json({ message: "blog comment delete successfully" });
    });
  };
}
module.exports = BLOG_COMMENT_CONTROLLER;
