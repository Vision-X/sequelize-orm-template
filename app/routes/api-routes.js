// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var orm = require("../config/orm.js");
//
//
// // Routes
// // =============================================================
// module.exports = function(app) {
//
//   // Search for Specific Character (or all characters) then provides JSON
//   app.get("/api/:characters", function(req, res) {
//
//     // If the user provides a specific character in the URL...
//     if (req.params.characters) {
//
//       // Then display the JSON for ONLY that character.
//       // (Note how we're using the ORM here to run our searches)
//       orm.searchCharacter(req.params.characters, function(data) {
//         res.json(data);
//       });
//     }
//
//     // Otherwise...
//     else {
//       // Otherwise display the data for all of the characters.
//       // (Note how we're using the ORM here to run our searches)
//       orm.allCharacters(function(data) {
//         res.json(data);
//       });
//     }
//
//   });
//
//   // If a user sends data to add a new character...
//   app.post("/api/new", function(req, res) {
//
//     // Take the request...
//     var character = req.body;
//
//     // Then send it to the ORM to "save" into the DB.
//     orm.addCharacter(character, function(data) {
//       console.log(data);
//     });
//
//   });
// };

var Character = require("../models/character.js");

module.exports = ((app) => {
  app.get("/api/:characters?", (req, res) => {
    if (req.params.characters) {
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then((result) => {
        return res.json(result)
      })
    } else {
      Character.findAll().then((result) => {
        return res.json(result);
      })
    }
  });

  app.post("/api/new", (req, res) => {
    let character = req.body;
    let routeName = character.name.replace(/\s+/g, "").toLowerCase();
    Character.create({
      routeName: routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    });
    res.status(204).end();
  });
});
