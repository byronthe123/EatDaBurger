// Set up MySQL connection.
const mysql = require("mysql");
const keys = require('./keys');
let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: keys.host,
    port: 3306,
    user: keys.user,
    password: keys.password,
    database: keys.database
  });
}

// Make connection:
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use:
module.exports = connection;
