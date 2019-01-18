// Set up MySQL connection.
const mysql = require("mysql");
const keys = require('./keys');
// const password = require('D://Documents//Columbia Engineering/password.json');

const connection = mysql.createConnection({
  host: keys.connection.host,
  port: 3306,
  user: keys.connection.user,
  password: keys.connection.password,
  database: keys.connection.database
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use:
module.exports = connection;
