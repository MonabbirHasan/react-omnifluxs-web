const mysql = require('mysql');

// Configure your MySQL connection settings
const dbConfig = {
  host: 'localhost', // Change this to your database host
  user: 'your_username', // Replace with your database username
  password: 'your_password', // Replace with your database password
  database: 'your_database_name', // Replace with your database name
};

// Create a MySQL connection pool
const mysqlConnection = mysql.createPool(dbConfig);

module.exports = mysqlConnection;
