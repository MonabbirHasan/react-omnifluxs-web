const db = require("../config/db");
class CLIENTS_MODEL {
  /************************
   * ALL CLIENTS FROM DB
   ************************/
  static all_clients_model = (callback) => {
    const sql = "SELECT * FROM clients";
    db.query(sql, callback);
  };
  /************************
   * SINGLE CLIENTS FROM DB
   ************************/
  static single_clients_model = (id, callback) => {
    const sql = "SELECT * FROM clients WHERE id=?";
    db.query(sql, [id], callback);
  };
  /************************
   * CREATE CLIENTS FROM DB
   ************************/
  static create_clients_model = (data, callback) => {
    const sql = "INSERT INTO clients SET?";
    db.query(sql, data, callback);
  };
  /************************
   * UPDATE CLIENTS FROM DB
   ************************/
  static update_clients_model = (id, data, callback) => {
    const sql = "UPDATE clients SET? WHERE id=?";
    db.query(sql, [data, id], callback);
  };
  /************************
   * DELETE CLIENTS FROM DB
   ************************/
  static delete_clients_model = (id, callback) => {
    const sql = "DELETE FROM clients WHERE id=?";
    db.query(sql, [id], callback);
  };
}
module.exports = CLIENTS_MODEL;
