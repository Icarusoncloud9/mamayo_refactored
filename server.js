// PLUGGING IN DEPENDENCIES
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 4000;

// PLUGGING IN MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// CREATING ROUTES
require("./routes/website_routes")(app);

// LISTENING COMPONENT
app.listen(PORT, function() {
    console.log("There ain\'t no hollaback girl on PORT: " + PORT);
});