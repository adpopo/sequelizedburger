// load dependencies
var mo = require("method-override");
var express = require("express");
var bp = require("body-parser");
var exphbs = require("express-handlebars")
var routes = require("./controllers/routes.js");

// setting up express and handlebars
var app = express();
app.use(express.static(__dirname + ".public"));
app.use(bp.urlencoded({
	extended: false
}));
app.use(mo("_method"));
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use("/",routes);

//turn that shit on
app.listen(3000);