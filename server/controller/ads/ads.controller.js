const ADS_MODALS = require("../../models/ads.models");
class ADS_CONTROLLER {
  /******************************
   * ALL ADS FROM DB MODALS
   ******************************/
  static all_ads = async (req, res) => {
    try {
      await ADS_MODALS.all_ads_model((err, data) => {
        if (err) {
          return res.status(500).json({ message: "failed to retrieve ads" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /******************************
   * ALL ADS FROM DB MODALS
   ******************************/
  static single_ads = async (req, res) => {
    try {
      const { id } = req.params;
      await ADS_MODALS.single_ads_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to retrieve single ads" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /******************************
   * ALL ADS FROM DB MODALS
   ******************************/
  static create_ads = async (req, res) => {
    try {
      const data = {
        ads_name: req.body.ads_name,
        ads_file: req.file.originalname,
        ads_type: req.body.ads_type,
        ads_price: req.body.ads_price,
        ads_description: req.body.ads_description,
        is_active: req.body.is_active,
      };
      await ADS_MODALS.create_ads_model(data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to create ads" });
        }
        res.status({
          message: "ads create successfully",
          id: results.insertId,
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /******************************
   * ALL ADS FROM DB MODALS
   ******************************/
  static update_ads = async (req, res) => {
    try {
      const { id } = req.params;
      const data = {
        ads_name: req.body.ads_name,
        ads_file: req.file.originalname,
        ads_type: req.body.ads_type,
        ads_price: req.body.ads_price,
        ads_description: req.body.ads_description,
        is_active: req.body.is_active,
      };
      await ADS_MODALS.update_ads_model(id, data, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to update ads" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "ads not found" });
        }
        res.status(200).json({ message: "ads update successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
  /******************************
   * ALL ADS FROM DB MODALS
   ******************************/
  static delete_ads = async (req, res) => {
    try {
      const { id } = req.params;
      await ADS_MODALS.delete_ads_model(id, (err, results) => {
        if (err) {
          return res.status(500).json({ message: "failed to delete ads" });
        }
        if (results.effectedRow === 0) {
          return res.status(404).json({ message: "ads not found" });
        }
        res.status(200).json({ message: "ads delete successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = ADS_CONTROLLER;
