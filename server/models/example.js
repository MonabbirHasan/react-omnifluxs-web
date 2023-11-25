// Import  MySQL connection
const mysqlConnection = require('../config/db');

// Function to get all users
const getAllUsers = (callback) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, rows);
  });
};

// Function to get a specific user by ID
const getUserById = (userId, callback) => {
  mysqlConnection.query('SELECT * FROM users WHERE id = ?', [userId], (err, rows) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, rows[0]); // Assuming user ID is unique, return the first result
  });
};

// Function to create a new user
const createUser = (userData, callback) => {
  mysqlConnection.query('INSERT INTO users SET ?', userData, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result.insertId); // Return the ID of the newly inserted user
  });
};

// Function to update a user
const updateUser = (userId, userData, callback) => {
  mysqlConnection.query('UPDATE users SET ? WHERE id = ?', [userData, userId], (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
};

// Function to delete a user
const deleteUser = (userId, callback) => {
  mysqlConnection.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
