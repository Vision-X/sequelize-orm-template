// Requiring mysql package
// var mysql = require("mysql");
//
// // Setting up our connection information
// var source = {
//   localhost: {
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "starwars"
//   }
// };
//
//
// // Creating our connection
// var connection = mysql.createConnection(source.localhost);
//
//
// // Connecting to the database.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Exporting our connection
// module.exports = connection;


let Sequelize = require("sequelize");

let sequelize = new Sequelize("starwars", "root", "root", {
  host: 'localhost',
  port: 8889,
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
})

module.exports = sequelize;
