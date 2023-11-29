const SUBSCRIPTION_MODALS = require("../../models/subscription.models");

class SUBSCRIPTION_CONTROLLER {
  /*****************************
   * ALL SUBSCRIPTION
   *****************************/
  static all_subscription = async (req, res) => {
    try {
      await SUBSCRIPTION_MODALS.all_subscription_model((err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "Failed to retrieve subscription" });
        }
        res.status(200).json(result);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * SINGLE SUBSCRIPTION
   *****************************/
  static single_subscription = async (req, res) => {
    try {
      const { id } = req.params;
      await SUBSCRIPTION_MODALS.single_subscription_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "Failed to retrieve single subscription" });
        }
        res.status(200).json(result);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * CREATE SUBSCRIPTION
   *****************************/
  static create_subscription = async (req, res) => {
    try {
      const data = {
        user_id: req.body.user_id,
        pouches_date: req.body.pouches_date,
        plan_id: req.body.plan_id,
        activation_status: req.body.activation_status,
        activation_date: req.body.activation_date,
        expire_date: req.body.expire_date,
        payment_status: req.body.payment_status,
        payment_method: req.body.payment_method,
        is_active: req.body.is_active,
      };
      await SUBSCRIPTION_MODALS.create_subscription_model(
        data,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create subscription" });
          }
          res.status(201).json({
            message: "subscription created success",
            id: result.insertId,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * UPDATE SUBSCRIPTION
   *****************************/
  static update_subscription = async (req, res) => {
    try {
      const { id } = req.params;
      const data = {
        user_id: req.body.user_id,
        pouches_date: req.body.pouches_date,
        plan_id: req.body.plan_id,
        activation_status: req.body.activation_status,
        activation_date: req.body.activation_date,
        expire_date: req.body.expire_date,
        payment_status: req.body.payment_status,
        payment_method: req.body.payment_method,
        is_active: req.body.is_active,
      };
      await SUBSCRIPTION_MODALS.update_subscription_model(
        id,
        data,
        (err, result) => {
          if (err) {
            console.log(err);
            return res
              .status(500)
              .json({ error: "Failed to update subscription" });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ error: "subscription not found" });
          }
          res.json({ message: "subscription updated successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /*****************************
   * DELETE SUBSCRIPTION
   *****************************/
  static delete_subscription = async (req, res) => {
    try {
      const { id } = req.params;
      await SUBSCRIPTION_MODALS.delete_subscription_model(id, (err, result) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: "Failed to delete subscription" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: "subscription not found" });
        }
        res.json({ message: "subscription deleted successfully" });
      });
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = SUBSCRIPTION_CONTROLLER;
