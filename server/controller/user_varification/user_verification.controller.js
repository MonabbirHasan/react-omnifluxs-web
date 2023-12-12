const USER_VERFICATION_MODEL = require("../../models/user_verification.models");
class USER_VERIFICATION_CONTROLLER {
  /************************************
   *ALL VERIFED USER FROM MODEL
   ************************************/
  static all_user_verification = (req, res) => {
    try {
      USER_VERFICATION_MODEL.all_user_verification_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get all user verification" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   *SINGLE VERIFED USER FROM MODEL
   ************************************/
  static single_user_verification = (req, res) => {
    try {
      const { id } = req.params;
      USER_VERFICATION_MODEL.single_user_verification_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single user verification" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   *CREATE VERIFED USER FROM MODEL
   ************************************/
  static create_user_verification = (req, res) => {
    try {
      const data = {
        user_id: req.body.user_id,
        national_id_verified: req.body.national_id_verified,
        national_id_image: req.file.originalname,
        phone_verified: req.body.phone_verified,
        email_verified: req.body.email_verified,
        address_verified: req.body.address_verified,
        date_of_birth: req.body.date_of_birth,
        kyc_level: req.body.kyc_level,
        identity_type: req.body.identity_type,
        identity_number: req.body.identity_number,
        expiry_date: req.body.expiry_date,
        kyc_status: req.body.kyc_status,
        kyc_notes: req.body.kyc_notes,
        is_active: req.body.is_active,
      };
      USER_VERFICATION_MODEL.create_user_verification_model(
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create user verification" });
          }
          res.status(201).json({
            message: "user verification create successfully",
            id: results.insertId,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   *UPDATE VERIFED USER FROM MODEL
   ************************************/
  static update_user_verification = (req, res) => {
    try {
      const { id } = req.params;
      const data = {
        user_id: req.body.user_id,
        national_id_verified: req.body.national_id_verified,
        national_id_image: req.file.originalname,
        phone_verified: req.body.phone_verified,
        email_verified: req.body.email_verified,
        address_verified: req.body.address_verified,
        date_of_birth: req.body.date_of_birth,
        kyc_level: req.body.kyc_level,
        identity_type: req.body.identity_type,
        identity_number: req.body.identity_number,
        expiry_date: req.body.expiry_date,
        kyc_status: req.body.kyc_status,
        kyc_notes: req.body.kyc_notes,
        is_active: req.body.is_active,
      };
      USER_VERFICATION_MODEL.update_user_verification_model(
        id,
        data,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update user verification" });
          }
          if (results.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "user verification not found" });
          }
          res
            .status(200)
            .json({ message: "user verification update successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  /************************************
   *DELETE VERIFED USER FROM MODEL
   ************************************/
  static delete_user_verification = (req, res) => {
    try {
      const { id } = req.params;
      USER_VERFICATION_MODEL.delete_user_verification_model(
        id,
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to delete user verification" });
          }
          if (results.effectedRow === 0) {
            return res
              .status(404)
              .json({ message: "user verification not found" });
          }
          res
            .status(200)
            .json({ message: "user verification delete successfully" });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = USER_VERIFICATION_CONTROLLER;
