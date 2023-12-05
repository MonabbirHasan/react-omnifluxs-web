const SUBSCRIPTION_PLAN_MODALS = require("../../models/subscriopton_plan.models");
class SUBSCRIPTION_PLAN_CONTROLLER {
  /**************************************
   * ALL SUBSCRIPTION PLAN MODALS
   **************************************/
  static all_subscriopton_plan = async (req, res) => {
    try {
      await SUBSCRIPTION_PLAN_MODALS.all_subscription_plan_modal(
        (err, result) => {
          if (err) {
            return res.status(500).json({ message: "failed to retrieve data" });
          }
          res.status(200).json(result);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   * SINGLE SUBSCRIPTION PLAN MODALS
   **************************************/
  static single_subscriopton_plan = async (req, res) => {
    try {
      const { id } = req.params;
      await SUBSCRIPTION_PLAN_MODALS.single_subscription_plan_modal(
        id,
        (err, result) => {
          if (err) {
            return res.status(500).json({ message: "failed to retrieve data" });
          }
          res.status(200).json(result);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   * CREATE SUBSCRIPTION PLAN MODALS
   **************************************/
  static create_subscriopton_plan = async (req, res) => {
    try {
      const data = req.body;
      await SUBSCRIPTION_PLAN_MODALS.create_subscription_plan_modal(
        data,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create subscription plan" });
          }
          res.status(201).json({
            message: "subscription plan created successfully",
            id: result.insertId,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   * UPDATE SUBSCRIPTION PLAN MODALS
   **************************************/
  static update_subscriopton_plan = async (req, res) => {
    try {
      const data = req.body;
      const { id } = req.params;
      await SUBSCRIPTION_PLAN_MODALS.update_subscription_plan_modal(
        id,
        data,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update subscription plan" });
          }
          if (result.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "subscription plan not found" });
          }
          res
            .status(200)
            .json({ message: "subscription plan update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /**************************************
   * DELETE SUBSCRIPTION PLAN MODALS
   **************************************/
  static delete_subscriopton_plan = async (req, res) => {
    try {
      const { id } = req.params;
      await SUBSCRIPTION_PLAN_MODALS.delete_subscription_plan_modal(
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to delete subscription plan" });
          }
          if (result.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "subscription plan not found" });
          }
          res
            .status(200)
            .json({ message: "subscription plan delete successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = SUBSCRIPTION_PLAN_CONTROLLER;
