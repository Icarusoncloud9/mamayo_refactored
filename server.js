// PLUGGING IN DEPENDENCIES
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const PORT = 4000 || process.env.PORT;

// PLUGGING IN MIDDLEWARE
app.use("/", express.static(path.join(__dirname, "public")));
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