var path = require("path");

module.exports = function(app){
    app.get("/", function (req, res) {
            console.log("Displaing home page");
            res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    app.get("/gear", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/equipment.html"));
    });

    app.get("/band", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/bio.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/404.html"));
    });
};