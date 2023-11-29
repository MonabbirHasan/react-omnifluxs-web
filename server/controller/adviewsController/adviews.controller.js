const ADVIEW_MODALS = require("../../models/adviews.models");
class ADVIEW_CONTROLLER {
  /*****************************
   * ALL ADVIEWS FROM MODALS
   *****************************/
  static all_adviews = async (req, res) => {
    try {
      await ADVIEW_MODALS.all_adview_modal((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to retrieve adview" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * ALL ADVIEWS FROM MODALS
   *****************************/
  static single_adviews = async (req, res) => {
    try {
      const { id } = req.params;
      await ADVIEW_MODALS.single_adview_modal(id, (err, data) => {
        if (err) {
          return res.status(500).json({ message: "feiled to retrieve adview" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * ALL ADVIEWS FROM MODALS
   *****************************/
  static create_adviews = async (req, res) => {
    const data = req.body;
    await ADVIEW_MODALS.create_adview_modal(data, (err, results) => {
      if (err) {
        return res.status(500).json({ message: "feiled to create adview" });
      }
      res
        .status(201)
        .json({ message: "adview create successfully", id: results.insertId });
    });
    try {
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * ALL ADVIEWS FROM MODALS
   *****************************/
  static update_adviews = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    await ADVIEW_MODALS.update_adview_modal(id, data, (err, results) => {
      if (err) {
        return res.status(500).json({ message: "failed to update adview" });
      }
      if (results.effectedRow === 0) {
        return res.status(404).json({ message: "adview not found" });
      }
      res.status(200).json({ message: "adview update successfully" });
    });
    try {
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * ALL ADVIEWS FROM MODALS
   *****************************/
  static delete_adviews =async (req, res) => {
    try {
        const { id } = req.params;
        await ADVIEW_MODALS.delete_adview_modal(id,(err, results) => {
          if (err) {
            return res.status(500).json({ message: "failed to delete adview" });
          }
          if (results.effectedRow === 0) {
            return res.status(404).json({ message: "adview not found" });
          }
          res.status(200).json({ message: "adview delete successfully" });
        });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = ADVIEW_CONTROLLER;
