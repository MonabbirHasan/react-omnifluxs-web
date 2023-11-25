const mysql = require("mysql");

// Configure your MySQL connection settings
const dbConfig = {
  host: "localhost", // Change this to your database host
  user: "root", // Replace with your database username
  password: "", // Replace with your database password
  database: "omnifluxs", // Replace with your database name
};

// Create a MySQL connection pool
const mysqlConnection = mysql.createPool(dbConfig);
if (mysqlConnection) {
  console.log("database is connected");
} else {
  console.log("databse is not connected");
}
module.exports = mysqlConnection;
