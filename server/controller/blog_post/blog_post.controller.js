const BLOG_POST_MODEL = require("../../models/blog_post.models");
class BLOG_POST_CONTROLLER {
  /**************************
   *ALL BLOG  POST FROM DB
   **************************/
  static all_blog_post = async (req, res) => {
    try {
      BLOG_POST_MODEL.all_blog_post_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get all blog post" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************
   *SINGLE BLOG  POST FROM DB
   **************************/
  static single_blog_post = (req, res) => {
    try {
      const { id } = req.params;
      BLOG_POST_MODEL.single_blog_post_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single blog post" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************
   *CREATE BLOG  POST FROM DB
   **************************/
  static create_blog_post = async (req, res) => {
    try {
      const data = {
        title: req.body.title,
        thumbnail: req.file.originalname,
        description: req.body.description,
        tags: req.body.tags,
        category: req.body.category,
        is_active: req.body.is_active,
        author: req.body.author,
      };
      BLOG_POST_MODEL.create_blog_post_model(data, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to create blog post" });
        }
        res.status(201).json({
          message: "blog post create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************
   *UPDATE BLOG  POST FROM DB
   **************************/
  static update_blog_post = async (req, res) => {
    try {
      const data = {
        title: req.body.title,
        thumbnail: req.file.originalname,
        description: req.body.description,
        tags: req.body.tags,
        category: req.body.category,
        is_active: req.body.is_active,
        author: req.body.author,
      };
      const { id } = req.params;
      BLOG_POST_MODEL.update_blog_post_model(id, data, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to update blog post" });
        }
        if (results.effectedRow === 0) {
          return res.status(200).json({ message: "blog post not found!" });
        }
        res.status(200).json({ message: "blog post update success" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /**************************
   *DELETE BLOG  POST FROM DB
   **************************/
  static delete_blog_post = async (req, res) => {
    try {
      const { id } = req.params;
      BLOG_POST_MODEL.delete_blog_post_model(id, (err, results) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete blog post" });
        }
        if (results.effectedRow === 0) {
          return res.status(200).json({ message: "blog post not found!" });
        }
        res.status(200).json({ message: "blog post delete success" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = BLOG_POST_CONTROLLER;
