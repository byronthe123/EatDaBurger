// Set up MySQL connection.
const mysql = require("mysql");
// const password = require('D://Documents//Columbia Engineering/password.json');

const connection = mysql.createConnection({
  host: "ofcmikjy9x4lroa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "yd382k4x79sjfjtq",
  password: 'xgtn8ztz9ciz0k1r',
  database: "burgers_db",
//   debug: true
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
