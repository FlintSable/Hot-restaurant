// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



var tables = [{
  reservationName: "yoda",
  phoneNumber: 5555555,
  customerEmail: "yoda@yoda.com",
  customerID: "force master"
}, {
  reservationName: "marty mcfly",
  phoneNumber: 7373737,
  customerEmail: "marty@backtothefuture.com",
  customerID: "michaeljfox"
 }
 ];

// Create the front-end (visuals) for home page, reservation form, and reservation views.

// Create a basic server using Express.JS

// Create a few array variables that will hold the data

// Create a set of routes for getting and posting table data

// Create a set of routes for displaying the HTML pages

// Use jQuery to run AJAX calls to GET and POST data from users to the Express server
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/makeRes", function(req, res) {
  res.sendFile(path.join(__dirname, "makeRes.html"));
});

app.get("/viewTables", function(req, res) {
  res.sendFile(path.join(__dirname, "viewTables.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/viewTables", function(req, res) {
  // var chosen = req.params.tables;

  // if (chosen) {
  //   console.log(chosen);

  //   for (var i = 0; i < characters.length; i++) {
  //     if (chosen === characters[i].routeName) {
  //       res.json(characters[i]);
  //       return;
  //     }
  //   }

  //   res.json(false);
  // }
  // else {
    res.json(tables);
  });
// });

// Create New Reservation - takes in JSON input
app.post("/api/new", function(req, res) {
  var newreservation = req.body;
  newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newreservation);

  tables.push(newreservation);

  res.json(newreservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
