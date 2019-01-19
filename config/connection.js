// Set up MySQL connection.
const mysql = require("mysql");
const keys = require('./keys');
let connection;

// const connection = mysql.createConnection({
//   host: keys.connection.host,
//   port: 3306,
//   user: keys.connection.user,
//   password: keys.connection.password,
//   database: keys.connection.database
// });

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: keys.host,
    port: 3306,
    user: keys.user,
    password: keys.password,
    database: keys.database
    // host: "localhost",
    // port: 3306,
    // user: "root",
    // password: "byron",
    // database: "burgers_db"
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
